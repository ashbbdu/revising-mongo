// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer"
require("dotenv").config()

export const sendMail = async (otp: Number , email : string) => {


    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: "ashishsrivastava.bbdu@gmail.com",
        to: email, // list of receivers
        subject: "OTP for registration", // Subject line
        text: `Please enter the otp ${otp} to complete the registration process`, // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>

}