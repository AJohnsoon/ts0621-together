import {Request, Response} from 'express';
import {UserService} from '../services/UserService';


class UsersController{
    async create(request: Request, response: Response): Promise<Response>{
        const { name, email, admin } = request.body

        const createUserService = new UserService()
        const newUser = await createUserService.execute({name, email, admin})

        return response.json(newUser)
    }
}

export { UsersController }