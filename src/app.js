import Server from "./server.js";
import connect from './database/mongo-db/index.js'
import envConfigs from "./configs/index.js";

let server;

async function run() {
  envConfigs();
  const dbConnection = await connect();
  server = new Server().listen(process.env.PORT);
}

run().catch((err) => {
  console.log(err.stack);
  process.exit(1);
});
