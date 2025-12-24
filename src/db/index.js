import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


import fs from 'fs';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        try {
            fs.writeFileSync('db-connection-failed.log', `DB Connection Error: ${error.message}\n${error.stack}`);
        } catch (e) {
            // ignore
        }
        // process.exit(1)
    }
}

export default connectDB