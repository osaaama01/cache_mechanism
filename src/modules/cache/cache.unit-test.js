import CacheService from "./cache.service.js";

describe("Cache Service Unit Test - Success Cases", () => {
    describe("Cache Service Unit Test - Success Cases", () => {
        const res = {
            status: '202'
        }

        it("Adding new Key", () => {
            const result = CacheService.upsertKey(res, { key: '1' });
            expect(result).toBeGreaterThan(3);
        });

        it("Updating new Key", () => {
        });

        it("Removing the newly created Key", () => {
        });

        it("Check the hit case for cache read", () => {
        });

        it("Check the miss case for cache read", () => {
        });

        it("Checking ttl by passing a value", () => {
        });

        it("Checking the max number of records", () => {
        });

        it("Checking the max number of records", () => {
        });

        it("Removing all keys", () => {
        });

        it("Removing all keys", () => {
        });
    });

    describe("Cache Service Unit Test - Failure Cases", () => {
        const res = {
            status: '500'
        }

        it("Adding new Key", () => {
            const result = CacheService.upsertKey(res, { key: '1' });
            expect(result).toBeGreaterThan(3);
        });

        it("Updating new Key", () => {
        });

        it("Removing the newly created Key", () => {
        });

        it("Check the hit case for cache read", () => {
        });

        it("Check the miss case for cache read", () => {
        });

        it("Checking ttl by passing a value", () => {
        });

        it("Checking the max number of records", () => {
        });

        it("Checking the max number of records", () => {
        });

        it("Removing all keys", () => {
        });

        it("Removing all keys", () => {
        });
    });
});