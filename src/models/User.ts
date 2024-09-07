import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
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
        ref: "Address",
        require : true
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Products",
            require : true
        }
    ],
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


export default mongoose.model('User', UserSchema);