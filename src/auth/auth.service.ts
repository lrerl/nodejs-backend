import {Body, HttpException, HttpStatus, Injectable, Post, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/create-user.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Role} from "../roles/roles.model";
import {JwtService} from "@nestjs/jwt";
import {UsersService} from "../users/users.service";
import * as bcrypt from 'bcryptjs'
import {User} from "../users/users.model";

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService,
                private jwtService: JwtService) {
    }

    async login(dto: CreateUserDto) {
        const user = await this.validate(dto);
        return this.generateToken(user);
    }

    async register(dto: CreateUserDto) {
        let candidate = await this.usersService.getUserByEmail(dto.email);
        if(candidate) {
            throw new HttpException("User with that email already exist", HttpStatus.BAD_REQUEST);
        }
        candidate = await this.usersService.getUserByUsername(dto.username);
        if(candidate) {
            throw new HttpException("User with that username already exist", HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(dto.password, 5);
        const user = await this.usersService.createUser({...dto, password: hashPassword});
        return this.generateToken(user);
    }

    private async generateToken(user: User) {
        const payload = {email: user.email, username: user.username, id: user.id, roles: user.roles};
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validate(dto: CreateUserDto) {
        const user = await this.usersService.getUserByUsername(dto.username);
        const passwordEquals = await bcrypt.compare(dto.password, user.password);
        if(user && passwordEquals) {
            return user;
        }
        throw new UnauthorizedException({message: "Incorrect username or password"})
    }
}