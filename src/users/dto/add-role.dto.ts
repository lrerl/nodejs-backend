import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";


export class AddRoleDto {

    @ApiProperty({example: "USER", description: "Role name"})
    @IsString({message: "Role must be a string"})
    readonly value: string;

    @ApiProperty({example: "2", description: "ID of user"})
    @IsNumber({}, {message: "User ID must be a number"})
    readonly userId: number;
}