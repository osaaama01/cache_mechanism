import Server from "./server.js";
import connect from './database/mongo-db/index.js'
import envConfigs from "./configs/index.js";

let server;
let dbConnection;

async function run() {
  envConfigs();
  dbConnection = await connect();
  server = new Server().listen(process.env.PORT);
}

run().catch((err) => {
  dbConnection.close();
  console.log(err.stack);
  process.exit(1);
});
