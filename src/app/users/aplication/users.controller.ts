import { Request, Response } from 'express'
import UsersServices from '../domain/services/user.services'

class UserController {
    async addUser(request: Request, response: Response) {
        response.send(await UsersServices.addUser(request.body))
    }

    async getUsers(_: Request, response: Response) {
        response.send(await UsersServices.getAllUsers())
    }
}

export default new UserController()