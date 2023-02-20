import {Table, Model, Column, DataType, BelongsToMany} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";



interface RoleCreationAttrs {
    value: string;
    username: string;
}

@Table({
    tableName: "roles"
})

export class Role extends Model<Role, RoleCreationAttrs> {

    @ApiProperty({example: 1, description: "Unique identificator"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: "username", description: "Username"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    username: string;

    @ApiProperty({example: "ADMIN", description: "Value of role"})
    @Column({type: DataType.STRING, allowNull: false})
    value: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];

}