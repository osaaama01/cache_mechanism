import CacheService from "./cache.service.js";

class CacheController {

    async readData(req, res) {

        return res.send(await CacheService.getDataByKey(res));

    }

    async getAllKeys(req, res) {

        return res.send(await CacheService.getAllKeys(res));

    }

    async upsertKey(req, res) {

        const body = req.body;
        return res.send(await CacheService.upsertKey(res, body));
    }

    async removeKey(req, res) {

        const body = req.params;
        return res.send(await CacheService.removeKey(res, body));
    }

}

export default new CacheController();