import { UserRepository } from '../repositories/user.repository';
import { User } from '../models/User';
import UserDbRepository from '../../infraestructure/user.db';

class UsersServices implements UserRepository {
    async addUser(user: User) {
        return UserDbRepository.addUser(user);
    }

    async getAllUsers(): Promise<User[]> {
        return await UserDbRepository.getAllUsers();
    }
}
export default new UsersServices()
