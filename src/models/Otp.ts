import mongoose from "mongoose";
import { sendMail } from "../utils/mailSender";

const OtpSchema = new mongoose.Schema({
    otp : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    createdAt: {
		type: Date,
		default: Date.now,
		// expires: 60, // The document will be automatically deleted after 5 minutes of its creation time
	}
})

// Define a function to send emails
async function sendVerificationEmail(email : string, otp : Number) {
	try {
		const mailResponse = await sendMail(otp , email);
		console.log("Email sent successfully: ", mailResponse);
	} catch (error) {
		console.log("Error occurred while sending email: ", error);
		throw error;
	}
}

// Define a post-save hook to send email after the document has been saved
OtpSchema.pre("save", async function (next : any) {
	console.log("New document saved to database");

	// Only send an email when a new document is created
	if (this.isNew) {
		await sendVerificationEmail(this.email, this.otp);
	}
	next();
});


export default mongoose.model('Otp', OtpSchema);