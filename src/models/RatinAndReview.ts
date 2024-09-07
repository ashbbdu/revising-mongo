import mongoose from "mongoose";


const ReviewAndRatingSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    review : {
        type: String,
        require: true,
        trim: true
    },
    rating : {
        type: Number,
        require: true,
        trim: true
    }
})

export default mongoose.model('ReviewAndRating', ReviewAndRatingSchema);