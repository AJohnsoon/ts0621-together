import { getCustomRepository }from 'typeorm';
import { TagsRepository } from "../repositories/TagsRepository";


class TagService { 
    async execute( name : string){
        const tagRepository = getCustomRepository(TagsRepository)

        if(!name){
            throw new Error("Incorrect name!")
        }

        const tagAlreadExists = await tagRepository.findOne({name})
        if(tagAlreadExists){
            throw new Error("Tag already exists")
        }
        const tag = tagRepository.create({name})
        await tagRepository.save(tag);
        return tag
    } 
}

export {TagService}