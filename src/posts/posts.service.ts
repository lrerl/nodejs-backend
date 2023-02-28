import {Injectable} from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Post} from "./posts.model";
import {FilesService} from "../files/files.service";

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private postsRepository: typeof Post,
                private filesService: FilesService) {

    }

    async createPost(dto: CreatePostDto, image: any) {
        const fileName = await this.filesService.createFile(image);
        return await this.postsRepository.create({...dto, image: fileName});
    }
}
