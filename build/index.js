"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
    }
    config() {
        this.app.set('port', 6000);
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.app.use(new routes_1.Routes().router);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server listening in port 6000');
        });
    }
}
const server = new Server();
server.start();
