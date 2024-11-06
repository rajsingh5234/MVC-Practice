import mongoose from "mongoose"
import { DB_NAME, MONGODB_URL } from "./server.config.js";

const connectDB = async () => {
    try {
        const mongodb_url = `${MONGODB_URL}/${DB_NAME}`
        const connectionInstance = await mongoose.connect(mongodb_url)
        console.log("MONGO_DB Connected Successfully, Host = ", connectionInstance.connection.host);

    } catch (error) {
        console.log("MONGO_DB Connection Failed", error);
        process.exit(1);
    }
}

export default connectDB;