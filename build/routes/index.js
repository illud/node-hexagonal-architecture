"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express_1 = __importDefault(require("express"));
const users_controller_1 = __importDefault(require("../users/aplication/users.controller"));
class Routes {
    constructor() {
        this.router = express_1.default.Router();
        // Users
        this.router.post('/api/users', users_controller_1.default.addUser);
        this.router.get('/api/users', users_controller_1.default.getUsers);
    }
}
exports.Routes = Routes;
