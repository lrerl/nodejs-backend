import {ApiProperty} from "@nestjs/swagger";
import {IsString, IsUppercase} from "class-validator";

export class CreateRoleDto {
    @ApiProperty({example: "ADMIN", description: "Role"})
    @IsString({message: "Role name must be a string"})
    @IsUppercase({message: "Role name must be written in an uppercase"})
    readonly value: string;
}