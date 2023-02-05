import * as express from "express";
import { engine } from "express-handlebars";
import { router } from "./Router";

export interface ServerOptions {
    staticDir: string;
    port: number;
}

export class Express {
    public app: express.Application;
    public options: ServerOptions;

    constructor(options: ServerOptions) {
        console.info("Starting server ....");
        this.app = express();
        this.options = options;
        this.config();
    }

    config() {
        this.app
            .engine("handlebars", engine())
            .set("view engine", "handlebars")
            .enable("view cache")
            .enable("trust proxy")
            .set("views", `${__dirname}/views/`)
            .use(express.urlencoded({ extended: true }))
            .use(router)
            .use(express.static(this.options.staticDir));
    }
}
