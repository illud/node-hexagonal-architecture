import { User } from "../domain/models/User";
import { UserRepository } from "../domain/repositories/user.repository";
import PrismaClient from '../../../data/prisma/prisma';

class UserDbRepository implements UserRepository {
    async addUser(user: User) {
        return await PrismaClient.user.create({
            data: {
                name: user.name,
                email: user.email
            }
        });
    }

    async getAllUsers(): Promise<User[]> {
        return await PrismaClient.user.findMany({});
    }
}

export default new UserDbRepository();