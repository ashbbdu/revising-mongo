import { Request, Response } from "express";
import Product from "../models/Product";
import RatinAndReview from "../models/RatinAndReview";
import User from "../models/User";


export const addReviewAndRating = async (req: Request, res: Response) => {
    const { rating, review, productId, userId } = req.body;
    try {

        const user = await User.findById(userId);

        const addRating = await RatinAndReview.create({
            user: user?._id,
            rating,
            review
        });

        await Product.findByIdAndUpdate(productId, { review: addRating._id }, { new: true });
        res.status(200).json({
            message: "Ratings added Successfully !",
            rating: addRating
        })
    } catch (e) {
        console.log(e);
    }
}