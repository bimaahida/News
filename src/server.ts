import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import routes from "./services";


process.on("uncaughtException", err => {
    console.log(err);
    process.exit(1);
});

process.on("unhandledRejection", err => {
    console.log(err);
    process.exit(1);
});

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

const { PORT = 3000} = process.env;
const server = http.createServer(router);

server.listen(PORT, () => 
    console.log(`SERVER is running http://localhost:${PORT}...`)
);
