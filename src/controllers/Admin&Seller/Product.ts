import { Request, Response } from "express";
import Product from "../../models/Product";
import User from "../../models/User";


export const createProduct = async (req: Request, res: Response) => {
    try {
        const { title, description, price, image } = req.body;

        const addProduct = await Product.create({
            title,
            description,
            image,
            price,
        })

        await User.updateOne({ _id: "66dc1bbd0b883f76314fba21" },
            {
                $push: {
                    products: addProduct._id,
                },
            },
            { new: true }
        )
        return res.status(201).json({ message: "Product created and added to user", product: addProduct });


    } catch (e) {
        console.log(e);

    }
}

export const getAllProducts = async (req: Request, res: Response) => {
    // const {page , perPage} = req.body;
    const { page, perpage, search  } = req.query;
    const filter = search
        ? {
            $text: { $search: search } // Using $text index for full-text search
        }
        : {};

    try {
        const products = await Product.find(
            {
                $expr: {
                  $regexMatch: {
                    input: {
                      $concat: ["$title" , "$description" ],
                    },
                    regex : search == undefined ? "" : search,
                    options: "i",
                  },
                },
              }
        ).skip(Number(page)).limit(Number(perpage));
        res.status(200).json({
            message: "Products fetched successfully !",
            products,
            totalPages : Math.ceil(Number(products.length) / Number(perpage))
        })
    } catch (e) {
        console.log(e)
    }
}




