import mongoose from "mongoose";

export const connect = () => {
    mongoose.connect("mongodb://localhost:27017/mongodbaugustdev").then(res => {
        console.log("DB connected Successfully !")
    }).catch(e => console.log(e)
    )
}