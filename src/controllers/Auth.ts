import { Request, Response } from "express";
import otpGenerator from "otp-generator"
import jwt from "jsonwebtoken"
import Address from "../models/Address";
import Otp from "../models/Otp";
import Profile from "../models/Profile";
import User from "../models/User";


export const sendOtp = async (req: Request, res: Response) => {
    const { email } = req.body;
    try {
        const otp = otpGenerator.generate(6, { digits: true, upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
        console.log(otp, "otp");
        if (!email) {
            return res.status(411).json({
                success: false,
                message: "Please enter the email !",
            })
        }
        const createOtp = await Otp.create({
            email,
            otp
        })
        console.log(createOtp);
        return res.status(200).json({
            success: true,
            message: "OTP send successfully !",
            otp: createOtp.otp
        })

    } catch (e) {
        console.log(e);

    }
}


export const signup = async (req: Request, res: Response) => {
    try {
        const { email, firstName, lastName, password, userType, otp } = req.body;
        const findlatestotp = await Otp.find({ email });
        console.log(findlatestotp, "latest otp");

        const findOtp = findlatestotp.reverse()
        console.log(findOtp[0], "obj")
        console.log(findOtp.length, "length")
        if (findOtp.length === 0) {
            return res.status(411).json({
                message: "Invaid Email"
            })
        }

        if (otp !== findOtp[0].otp) {
            return res.status(411).json({
                message: "Invalid Otp"
            })
        }

        const profileDetails = await Profile.create({
            gender: null,
            dateOfBirth: null,
            about: null,
            contactNumber: null,
        })

        const addressDetails = await Address.create({
            city: null,
            country: null,
            state: null,
            location: null,
            street: null
        })

        const createuser = await User.create({
            email,
            firstName,
            lastName,
            password,
            userType,
            otp,
            additionalDetails: profileDetails._id,
            addressDetails: addressDetails._id

        })
        return res.status(200).json({
            msg: "User created",
            user: createuser
        })

    } catch (e) {
        console.log(e);

    }
}

export const signin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(413).json({
                message: "User with this email does not exist !",
            })
        }

        const payload = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            userType: user.userType,
            id: user._id
        }
        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60), //expires in 1 hour
            data: payload
        }, process.env.JWT_SECRET || "");

        //  user.token = token; 
        if (user.password === password) {
            return res.status(200).json({
                message: "Logged in successfully !",
                user,
                token
            })
        }

    } catch (e) {
        console.log(e);

    }
}


export const getallusers = async (req: Request, res: Response) => {
    try {
        const users = await User.find({ userType: "Customer" }).populate("products").exec();
        res.status(200).json({
            message: "Users fetched successfully !",
            users
        })

    } catch (e) {
        console.log(e);

    }
}

