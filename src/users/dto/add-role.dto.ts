import {ApiProperty} from "@nestjs/swagger";


export class AddRoleDto {

    @ApiProperty({example: "USER", description: "Role name"})
    readonly value: string;

    @ApiProperty({example: "2", description: "ID of user"})
    readonly userId: number;
}