import "reflect-metadata";
import { createConnection, DataTypeNotSupportedError } from "typeorm";
import { Request, Response } from "express";
import * as express from "express";
import { AppRoutes } from "@routes/index";

// create connection with database
// TypeORM creates connection pools and uses them for the requests
createConnection()
  .then(async (connection) => {
    // create express app
    const app = express();
    app.use(express.json());

    // register all application routes
    AppRoutes.forEach((route) => {
      app[route.method](
        `/v1${route.path}`,
        route.middleware || [],
        (request: Request, response: Response, next: Function) => {
          route
            .action(request, response)
            .then(() => next)
            .catch((err) => next(err));
        }
      );
    });

    // error handler
    app.use(function (err, req: Request, res: Response, next: Function) {
      console.log("****SERVER_ERROR****");
      console.log(err);

      return res.status(500).json({
        error: err.message || "Something went wrong!",
      });
    });

    // run app
    app.listen(3000);

    console.log("Express application is up and running on port 3000");
  })
  .catch((error) => console.log("DB connection error: ", error));
