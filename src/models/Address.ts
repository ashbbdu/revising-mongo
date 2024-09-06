import mongoose from "mongoose";


export const Address = new mongoose.Schema({
    street : {
        type: String,
        require: true,
        trim: true
    },
    city : {
        type: String,
        require: true,
        trim: true
    },
    location : {
        type: String,
        require: false,
        trim: true
    },
    state : {
        type: String,
        require: false,
        trim: true
    },
    country : {
        type: String,
        require: false,
        trim: true
    }
    // user : {
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref : "User"
    // }
})