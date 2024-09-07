import mongoose from "mongoose";


 const ProductSchema = new mongoose.Schema({
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
    image : {
        type : String,
        require: true,
        trim: true
    },
    review : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "ReviewAndRating"
        }
    ]
}, {timestamps :  true})

export default mongoose.model('Product', ProductSchema);