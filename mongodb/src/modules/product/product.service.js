import { ObjectId } from "bson";
import { Product } from "../../db/models/product.model.js";

// add product
export const createProduct = async (req, res, next) => {

    // Product.insertMany([{},{}]) >> take list of objects >> result >> insertedIds >> [1,2,3,4]
    // Product.insertOne({}) >> take single object
    const result = await Product.insertOne(req.body);
    return res
        .status(201)
        .json({ 
            message: "product created successfully", 
            success: true, 
            result,
         });
};

// update product
export const updateProduct = async (req, res, next) => {
    /**
     * id product >> params
     * data >> body
     */

    const result = await Product.updateOne(
        { _id: new ObjectId(req.params.id) }, 
        { $set: req.body }
);

    if (result.modifiedCount === 0) {
        return res.status(404).json({ message: "Product not found", success: false });
    }

    res.status(200).json({ message: "Product updated successfully", success: true,result });
};

// get all products
export const getAllProducts = async (req, res, next) => {
    const products = await Product.find().toArray();
    return res.status(200).json({
        message: "Products fetched successfully",
        success: true,
        data:products,
    });
};

// delete product >> hard delete
export const deleteProduct = async (req, res, next) => {
    const result = await Product.deleteOne({ _id: new ObjectId(req.params.id) });

    if (result.deletedCount === 0) {
        return res.status(404).json({ message: "Product not found", success: false });
    }

    return res.status(200).json({
        message: "Product deleted successfully",
        success: true,
        result,
    });
};

