import mongoose from 'mongoose';
import colors from 'colors';
import { exit } from 'node:process';

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.DATABASE_URL!)
        console.log(colors.cyan.underline.bold(`MongoDB Connected: ${connection.connection.host}`));
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold);
        exit(1);
    }
}