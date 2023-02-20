import {ApiProperty} from "@nestjs/swagger";


export class CreateUserDto {

    @ApiProperty({example: "username", description: "Unique username"})
    readonly username: string;

    @ApiProperty({example: "example12@gmail.com", description: "Unique email of user"})
    readonly email: string;

    @ApiProperty({example: "pass1234", description: "Password of user"})
    readonly password: string;
}