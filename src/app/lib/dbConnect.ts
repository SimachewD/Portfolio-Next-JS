import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
require('dotenv').config();

async function dbConnect() {

    const MONGO_URI = process.env.MONGO_URI || '';

    if (!MONGO_URI) {
        return NextResponse.json({Error: 'Please define the MONGODB_URI environment variable inside .env.local'});
    }


    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        return NextResponse.json({Error: 'Error connecting to MongoDB', Details: error});
    }
}

export default dbConnect;
