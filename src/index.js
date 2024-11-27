import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "./contants";
(async ()=>{
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    } catch (error) {
        console.error('ERROE :' , error)
    }
})

