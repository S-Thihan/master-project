import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import { Product } from "../models/product";
import { AuthRequest } from "../middlewares/authMiddleware";


// @route POST  /api/products
export const createProduct = asyncHandler(async (req: AuthRequest, res: Response) => {
    const {
        name,
        description,
        price,
        instock_count,
        category,
        sizes,
        colors,
        images,
        is_new_Arrival,
        is_Feature,
        rating_count,
    } = req.body

    const newProduct = await Product.create({
        name,
        description,
        price,
        instock_count,
        category,
        sizes,
        colors,
        images,
        is_new_Arrival,
        is_Feature,
        rating_count,
        userId: req.user?._id,
    })

    if (newProduct) {
        res.status(201).json(newProduct)
    } else {
        throw new Error("Something went wrong");
    }
})

// @route PUT  /api/products/:id
export const updateProduct = asyncHandler(async (req: AuthRequest, res: Response) => {
    const {
        name,
        description,
        price,
        instock_count,
        category,
        sizes,
        colors,
        images,
        is_new_Arrival,
        is_Feature,
        rating_count,
    } = req.body
    const { id } = req.params
    const existingProduct = await Product.findById(id)

    if (!existingProduct) {
        res.status(404)
        throw new Error("No product found with this id")
    }

    existingProduct.name = name || existingProduct.name
    existingProduct.description = description || existingProduct.description
    existingProduct.price = price || existingProduct.price
    existingProduct.instock_count = instock_count || existingProduct.instock_count
    existingProduct.category = category || existingProduct.category
    existingProduct.sizes = sizes || existingProduct.sizes
    existingProduct.colors = colors || existingProduct.colors
    existingProduct.images = images || existingProduct.images
    existingProduct.is_new_Arrival = is_new_Arrival || existingProduct.is_new_Arrival
    existingProduct.is_Feature = is_Feature || existingProduct.is_Feature
    existingProduct.rating_count = rating_count || existingProduct.rating_count

    const updatedProduct = existingProduct.save()

    res.status(200).json(updateProduct);

})

// @ route DELETE /api/products/:id
export const deleteProduct = asyncHandler(async (req: AuthRequest, res: Response) => {
    const { id } = req.params;

    const existingProduct = await Product.findById(id);

    if (!existingProduct) {
        res.status(404);
        throw new Error("No product found with this id");
    }

    await existingProduct.deleteOne();
    res.status(404).json({ message: "Product deleted" })
})