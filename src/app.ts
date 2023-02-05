import { Express, ServerOptions } from "./Express";
import * as http from "http";
import { config } from "dotenv";
config();

const options: ServerOptions = {
    staticDir: `${__dirname}/static`,
    port: process.env.APP_PORT ? Number(process.env.APP_PORT) : 3000,
};

const app = new Express(options).app;

http.createServer(app)
    .listen(options.port)
    .on("listening", () => console.info(`Listening on port: ${options.port}`));
