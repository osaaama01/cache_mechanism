import mongoose from 'mongoose';

export async function connect() {
    const DB_URL = `${process.env.DB_PROVIDER}://${process.env.DB_HOST}:${process.env.PORT}/${process.env.DATABASE}`;
    await mongoose.connect(connectionString);
    return connectionString;
}