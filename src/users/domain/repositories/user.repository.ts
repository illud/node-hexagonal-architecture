import { User } from '../models/User';

export interface UserRepository {
    addUser(user: User): any;
    getAllUsers(): Promise<User[]>;
}