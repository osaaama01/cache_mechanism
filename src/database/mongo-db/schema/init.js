import Cache from "./cache/index.js";

//Populate all schemas in the mongoDb
function populateDb() {
    Cache.init();
}

export default populateDb;