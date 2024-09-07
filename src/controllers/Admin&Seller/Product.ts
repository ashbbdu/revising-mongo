import { Request, Response } from "express";
import Product from "../../models/Product";
import User from "../../models/User";


export const createProduct = async (req : Request , res : Response) => {
    try {
        const { title , description , price , image } = req.body;

        const addProduct = await Product.create({  title ,
            description ,
            image ,
            price,
        })

    await User.updateOne({_id : "66dc1bbd0b883f76314fba21"} , 
            {
                $push: {
                  products: addProduct._id,
                },
              },
              { new: true }
        )
        return  res.status(201).json({ message: "Product created and added to user", product: addProduct });
        

    } catch (e) {
        console.log(e);
        
    }
}

