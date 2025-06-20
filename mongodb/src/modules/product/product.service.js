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
    let updateObj = req.body;
    //req.body.userId?req.body.userId = new ObjectId(req.body.userId):null;
    req.body.userId && (updateObj.userId = new ObjectId(req.body.userId));
    const result = await Product.updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: updateObj }
    );

    if (result.modifiedCount === 0) {
        return res.status(404).json({ message: "Product not found", success: false });
    }

    res.status(200).json({ message: "Product updated successfully", success: true, result });
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

// get all products
export const getAll = async (req, res, next) => {
    // const cursor = Product.find() // >> return cursor >> not array
    // let products = [];
    // while (await cursor.hasNext()) {
    //     const product = await cursor.next();
    //     console.log({product});
    //     products.push(product);
    // }
    // return res.status(200).json({
    //     message: "Products fetched successfully",
    //     success: true,
    //     data: products,
    // });
    const products = await Product.find().toArray();
    return res.status(200).json({
        message: "Products fetched successfully",
        success: true,
        data: products,
    });
};

export const getAll2 = async (req, res, next) => {
    const products = await Product.aggregate([
        /*{
            $match:{name:"iPhone13"}, // filter >> match >> where 
        },**/
        {
            $lookup: {
                from: "users", // collection name
                foreignField: "_id", // field in user
                localField: "userId", // field in product
                as: "userData", // output array
            },
        },
    ]).toArray();// aggregation pipeline >> take array of objects >> each object is a pipeline
    return res.json({
        products,
    });
};


