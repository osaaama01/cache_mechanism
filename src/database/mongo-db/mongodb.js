import mongoose from 'mongoose';

export async function connect() {
    const DB_URL = `${process.env.DB_PROVIDER}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    return await mongoose.connect(DB_URL);
}