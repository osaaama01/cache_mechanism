import Express from "express";
import http from "http";
import os from "os";
import bodyParser from 'body-parser';

const app = Express();

class Server {
  constructor() {
    app.use(bodyParser.json());
    app.use(Express.urlencoded({ extended: true }))
    console.log("Constructor running");
  }

  router(routes) {
    routes(app);
    return this;
  }

  listen(port = process.env.PORT || "3000") {
    const welcome = () =>
      console.log(
        `Server is up and running in ${process.env.NODE_ENV || "development"
        } @: ${os.hostname()} on port: ${port}`
      );
    http.createServer(app, welcome()).listen(port);
    return app;
  }
}

export default Server;
