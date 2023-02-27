import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";


export class BanUserDto {

    @ApiProperty({example: "Bad boy", description: "Ban reason"})
    @IsString({message: "Ban reason must be a string"})
    readonly banReason: string;

    @ApiProperty({example: "2", description: "ID of user"})
    @IsNumber({}, {message: "User ID must be a number"})
    readonly userId: number;
}