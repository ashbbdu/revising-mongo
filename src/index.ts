import express from "express";
import { connect } from "./db/db";
import otproutes from "./routes/Otp"

const app = express();
app.use(express.json());
require("dotenv").config();


const PORT = process.env.PORT || 5000;


connect();

app.get("/" , (req , res) => {
    res.send("App is up and running !")
})

app.use("/api/v1/otp" , otproutes)

app.listen(PORT , () => {
    console.log(`App is running on PORT ${PORT}`);   
});