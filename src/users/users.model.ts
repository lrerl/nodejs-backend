import {Table, Model, Column, DataType, BelongsToMany} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";



interface UserCreationAttrs {
    username: string;
    password: string;
    email: string;
}

@Table({
    tableName: "users"
})
export class User extends Model<User, UserCreationAttrs> {

    @ApiProperty({example: 1, description: "Unique identificator"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: "username", description: "Unique username"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    username: string;

    @ApiProperty({example: "pass1234", description: "Password of user"})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: "example12@gmail.com", description: "Unique email of user"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: "false", description: "Ban"})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: "Bad boy", description: "Ban reason"})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

}