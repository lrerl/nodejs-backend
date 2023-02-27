import {ApiProperty} from "@nestjs/swagger";


export class BanUserDto {

    @ApiProperty({example: "Bad boy", description: "Ban reason"})
    readonly banReason: string;

    @ApiProperty({example: "2", description: "ID of user"})
    readonly userId: number;
}