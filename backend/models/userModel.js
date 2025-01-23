import { MongoOIDCError } from "mongodb";
import mongoose, { Model }  from "mongoose";
const userSchema = mongoose.Schema({
    firstName : {
        type :String,
        required : true
    } ,
    lastName : {
        type :String,
        required : true
    },
    email : {
        type: String,
        required : true
    },

    password : {
        type : String,
    }
})

export const User = mongoose.model('User', userSchema);