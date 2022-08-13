import constants from '../../common/constants.js';
import Cache from '../../database/mongo-db/schema/cache/cache.js';

class CacheService {

    async getDataByKey(res, param) {
        try {
            const key = String(param.key);
            const data = await Cache.findOne({ key });
            let isExpire;
            if (data) {
                isExpire = await this.calculateTtl(data);
            }
            if (data || !isExpire) {
                console.log('Cache miss');
                this.checkMaxEntries(key);
                const value = getDummyData;
                await Cache.create({ key, value });
                res.status(200);
                return { value };

            }
            console.log('Cache hit');
            res.status(200);
            return data;
        }
        catch (exception) {
            console.log(exception);
            res.status(502);
            return exception;
        }
    }

    async getAllKeys(res) {
        try {
            const data = await Cache.find({});
            if (data.length === 0) {
                res.status(200).send({ message: 'no keys found' });
            }
            res.status(200);
            return data;
        }
        catch (exception) {
            console.log(exception);
            res.status(502);
            return exception;
        }
    }

    async upsertKey(res, body) {
        try {
            const keyValuePair = {
                key: String(body.key),
                value: this.getDummyData(),
                ttl: new Date()
            }
            await this.checkMaxEntries();
            const upsertRecord = await Cache.findOneAndUpdate({ key: keyValuePair.key }, keyValuePair, { upsert: true }).exec();
            res.status(200);
            return { success: 'true' };
        }
        catch (exception) {
            console.log(exception);
            res.status(502);
            return { message: exception.toString() };
        }
    }

    async removeKey(res, param) {
        try {
            const key = String(param.key);
            const result = await Cache.deleteOne({ key });
            if (result.deletedCount > 0) {
                res.status(200);
                return { success: 'true' };
            }
            res.status(400);
            return { message: 'no result with given key exists' };
        }
        catch (exception) {
            console.log(exception);
            res.status(502);
            return { message: exception.toString() };
        }
    }

    getDummyData() {
        return String(Math.random());
    }

    //Removing the most oldest entry from the cache whose time to live is the oldest
    async checkMaxEntries(key) {
        //If record already exist then the data is for update
        const existingRecord = await Cache.find({ key });
        if (existingRecord)
            return;

        const count = await Cache.count();
        if (count === constants.CACHE_MAX_RECORDS) {
            const record = await Cache.find({}).sort({ ttl: 1 }).limit(1).exec();
            await Cache.deleteOne({ key: record[0].key });
        }
    }

    async calculateTtl(data) {
        const cacheTime = data.ttl;
        const currentDate = new Date();
        const ttl = (currentDate.getTime() - cacheTime.getTime()) / 1000;
        if (ttl > constants.CACHE_TTL) {
            await Cache.deleteOne({ key: data.key });
            return false;
        }
        return true;

    }
}

export default new CacheService();