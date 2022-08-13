import mongoose from 'mongoose';

const CacheSchema = mongoose.Schema({
    key: { type: String, required: true, unique: true },
    value: String,
    ttl: {
        type: Date,
        default: Date.now()
    },
}, { timestamps: true });

CacheSchema.index({ key: -1 });

const Cache = mongoose.model(
    'Cache',
    CacheSchema
);

export default Cache;