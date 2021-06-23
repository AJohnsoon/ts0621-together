import { getCustomRepository }from 'typeorm';
import { UsersRepository } from "../repositories/UsersRepository";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class UserService {
    async execute({name, email, admin} : IUserRequest){
        const userRepository = getCustomRepository(UsersRepository)

        if(!email){
            throw new Error("Email incorrect")
        }

        const userAlreadyExists = await userRepository.findOne({email})

        if(userAlreadyExists){
            throw new Error("User already exists")
        }

        const user = userRepository.create({name, email, admin})
        await userRepository.save(user);
        return user

    }
}

export { UserService }