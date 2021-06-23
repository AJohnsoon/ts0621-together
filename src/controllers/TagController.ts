import {Request, Response} from 'express';
import {TagService} from '../services/TagService';

class TagsController{
    async create(request: Request, response: Response): Promise<Response>{
        const {name} = request.body;

    const createTagService = new TagService()
    const newTag = await createTagService.execute(name)

    return response.json(newTag)
    }
}

export { TagsController}


