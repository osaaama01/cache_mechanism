import cacheController from "../modules/cache/cache.controller.js";

function routes(app) {

    //Routes for Cache
    app.get('/cache/:key', cacheController.readData);
    app.get('/cache/get-keys', cacheController.getAllKeys);
    app.post('/cache', cacheController.upsertKey);
    app.delete('/cache/:key', cacheController.removeKey);
    app.delete('/cache', cacheController.removeAllKeys);
}

export default routes;