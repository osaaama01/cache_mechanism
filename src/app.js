import Server from "./server.js";

let server;

async function run() {
  // const s = await db.connect();
  // console.log('connected to ' + s);
  console.log("Running...");
  server = new Server().listen(process.env.PORT);
}

run().catch((err) => {
  console.log(err.stack);
  process.exit(1);
});
