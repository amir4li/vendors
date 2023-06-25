import mongoose from 'mongoose';

let cachedDb: any = null;
const MONGODB_URI = process.env.MONGO_URI || "";

export async function connectDB() {
    if (cachedDb) return cachedDb;

    try {
        const connection = await mongoose.connect(MONGODB_URI);
        cachedDb = connection;
        return cachedDb;

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);

    }
};

