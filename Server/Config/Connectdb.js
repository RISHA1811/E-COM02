import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

// Temporarily make MongoDB optional for testing
// if(!process.env.MONGODB_URL){
//     throw new Error(
//         "Please provide MONGODB_URL In The .env File"
//     )
// }

async function connectDB() {
    try {
        const mongoURL = process.env.MONGODB_URL;
        if (!mongoURL) {
            console.log('MongoDB URL not provided, skipping database connection');
            return;
        }
        console.log('Attempting to connect to MongoDB...');
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Successfully connected to MongoDB');
        
        mongoose.connection.on('error', (err) => {
            console.error('MongoDB connection error:', err);
        });
        
        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB disconnected');
        });
    } catch (error) {
        console.error('MongoDB connection error:', error);
        console.log('Continuing without database connection...');
    }
}

export default connectDB;
