import express, { Router } from 'express'
import UserController from '../app/users/aplication/users.controller'

export class Routes {
    public router: Router;

    constructor() {
        this.router = express.Router();

        // Users
        this.router.post('/api/users', UserController.addUser);
        this.router.get('/api/users', UserController.getUsers);
    }
}