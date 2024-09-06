import mongoose from "mongoose";


export const Products = new mongoose.Schema({
    title : {
        type: String,
        require: true,
        trim: true
    },
    description : {
        type: String,
        require: true,
        trim: true
    },
    price : {
        type: Number,
        require: true,
        trim: true
    },
    // user : {
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref : "User"
    // }
}, {timestamps :  true})