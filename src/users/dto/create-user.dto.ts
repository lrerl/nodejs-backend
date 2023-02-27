import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";


export class CreateUserDto {

    @ApiProperty({example: "username", description: "Unique username"})
    @IsString({message: "Password must be value type of string"})
    readonly username: string;

    @ApiProperty({example: "example12@gmail.com", description: "Unique email of user"})
    @IsString({message: "Password must be value type of string"})
    @IsEmail({},{message: "Incorrect email form"})
    readonly email: string;

    @ApiProperty({example: "pass1234", description: "Password of user"})
    @IsString({message: "Password must be value type of string"})
    @Length(4, 16, {message: "Password length must be greater than 4 and lesser than 16"})
    readonly password: string;
}