import {Request, Response} from 'express';
import {UsersService} from '../services/UsersService'


class UsersController{
    async create(request: Request, response: Response): Promise<Response>{
        const { name, email, admin } = request.body

        const createUserService = new UsersService()
        const newUser = await createUserService.execute({name, email, admin})

        return response.json(newUser)
    }
}

export { UsersController }