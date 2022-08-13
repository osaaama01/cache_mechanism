import Server from "./server.js";
import connect from './database/mongo-db/index.js'
import envConfigs from "./configs/index.js";
import init from './database/mongo-db/schema/init.js'
import routes from "./routes/index.js";

let server;
let dbConnection;

async function run() {
  envConfigs();
  dbConnection = await connect();
  init();
  server = new Server().router(routes).listen(process.env.PORT);
}

run().catch((err) => {
  console.log(err.stack);
  process.exit(1);
});
