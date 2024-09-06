import mongoose from "mongoose";


export const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        trim: true
    },
    lastName: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    },
    userType : {
        type : String,
        enum : ["Admin" , "Seller" , "Customer"],
        require : true
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
    },
    products: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products"
    },
    additionalDetails : {
        type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "Profile",
    },
    // createdAt: {
	// 	type:Date,
	// 	default:Date.now
	// },

    
} ,  { timestamps: true })