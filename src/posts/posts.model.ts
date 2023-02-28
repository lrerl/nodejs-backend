import {Table, Model, Column, DataType, BelongsToMany, BelongsTo, ForeignKey} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {User} from "../users/users.model";



interface PostCreationAttrs {
    title: string;
    content: string;
    userId: number;
    image: string;
}

@Table({
    tableName: "posts"
})
export class Post extends Model<Post, PostCreationAttrs> {

    @ApiProperty({example: 1, description: "Unique identificator"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: "my first post", description: "Unique title of post"})
    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @ApiProperty({example: "any message what you want to share", description: "Content of post"})
    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @ApiProperty({example: "", description: "Image which post may contain"})
    @Column({type: DataType.STRING})
    image: string;

    @ApiProperty({example: "3", description: "ID of author"})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: false})
    userId: number;

    @ApiProperty({example: "", description: "Author properties"})
    @BelongsTo(() => User)
    author: User;

}