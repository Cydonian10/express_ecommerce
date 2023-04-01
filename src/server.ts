import express, { Application } from "express";
import http from "http";
import { cwd } from "process";
import path from "path";

import { apiRoutes } from "@/routes/routes";
import {
  boomErrorHandler,
  errorHandler,
  logHandler,
} from "@/middlewares/error.handler";

class ServerExpress {
  private app: Application = express();
  private httpServer: http.Server = http.createServer(this.app);

  constructor() {
    this.listenServer();
  }

  middlwares() {
    this.app.use("/public", express.static(path.join(cwd(), "public")));

    apiRoutes(this.app);

    this.app.use(logHandler);
    this.app.use(boomErrorHandler);
    this.app.use(errorHandler);
  }

  listenServer() {
    this.middlwares();
    this.httpServer.listen(3000, () => {
      console.log(`[listen] http://localhost:${3000}`);
    });
  }
}

new ServerExpress();
