import { Request, Response } from "express";
import otpGenerator  from "otp-generator"
import Otp from "../models/Otp";
import { sendMail } from "../utils/mailSender";


export const sendOtp = async (req : Request , res : Response) => {
    const { email } = req.body;
    try {
        const otp = otpGenerator.generate(6, {digits : true , upperCaseAlphabets: false, specialChars: false , lowerCaseAlphabets : false});
        console.log(otp , "otp");
        if(!email) {
            return res.status(411).json({
                success : false,
                message : "Please enter the email !",
            })
        }
        const createOtp = await Otp.create({
            email,
            otp 
        })
        console.log(createOtp);
        return res.status(200).json({
            success : true,
            message : "OTP send successfully !",
            otp : createOtp.otp
        })
        
    } catch (e) {
        console.log(e);
        
    }
}