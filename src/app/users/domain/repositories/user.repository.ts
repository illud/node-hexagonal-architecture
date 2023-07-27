import { User } from '../models/User';

export interface IUserRepository {
    addUser(user: User): any;
    getAllUsers(): Promise<User[]>;
}