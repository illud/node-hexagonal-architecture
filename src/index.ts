import express from 'express'
import cors from "cors";
import { Routes } from './routes';

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    public config() {
        this.app.set('port', 6000);
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(new Routes().router)
    }

    public start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server listening in port 6000');
        });
    }
}

const server = new Server();
server.start();