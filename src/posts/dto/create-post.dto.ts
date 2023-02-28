import {ApiProperty} from "@nestjs/swagger";
import {IsInt, IsNumber, IsString} from "class-validator";

export class CreatePostDto {
    @ApiProperty({example: "my first post", description: "Post title"})
    @IsString({message: "Post name must be a string"})
    readonly title: string;

    @ApiProperty({example: "any message what you want to share", description: "Content of post"})
    @IsString({message: "Post content must be a string"})
    readonly content: string;

    @ApiProperty({example: "my first post", description: "Post title"})
    @IsNumber({}, {message: "ID must be a number"})
    readonly id: number;
}