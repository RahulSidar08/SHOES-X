import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URL = process.env.MONGO_URL ;

export const dbConnection = () =>{
    mongoose.connect(`${MONGO_URL}`).then(() =>{
        console.log("Successfully connected to database")
    }).catch((err) => {
        console.log(`Some error occur while connected to database ${err}`)
    })
}