import mongoose from "mongoose";


const ProfileSchema = new mongoose.Schema({
    gender : {
        type: String,
        require: true,
        trim: true
    },
    dateOfBirth : {
        type: String,
        require: true,
        trim: true
    },
    about : {
        type: String,
        require: false,
        trim: true
    },
    state : {
        type: String,
        require: false,
        trim: true
    },
    contactNumber : {
        type: Number,
        require: false,
        trim: true
    }
})

export default mongoose.model('Profile', ProfileSchema);