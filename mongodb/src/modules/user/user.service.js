import { ObjectId } from "mongodb";
import { User } from "../../db/models/user.model.js";

export const addUser = async (req, res, next) => {
  const result = await User.insertOne(req.body); //{acknowledged: true, insertedId: ObjectId("...")}
  if (!result.acknowledged) {
    return res.status(500).json({
      message: "User creation failed",
      success: false,
    });
  }
  return res.status(201).json({
    message: "User created successfully",
    success: true,
    result,
  });
};
export const getAllUsers = async (req, res, next) => {
  const users = await User.aggregate([
    {
      $lookup: {
        from: "products",
        foreignField: "userId",
        localField: "_id",
        as: "productsData",
      },
    },
    {
      $unwind: "$productsData", //unwind >> spreed >> make it object not array >> deconstructs the array >> عكسها group بدل ما تفك array ل object بتجمع object ل array
    },
    /*{
                $unwind: "$productsData.properties.colors", //unwind >> spreed >> make it object not array >> deconstructs the array >> عكسها group بدل ما تفك array ل object بتجمع object ل array
            },**/
    {
      $project: {
        name: 1, //inclusion >> 1
        _id: 1,
        productsData: 1,
        // 'productsData.name': 1,
        // 'productsData.price': 1,
        //salary:0, //exclusion >> 0
      }, //projection >> inclusion , exclusion
    },
    // {
    //     $skip: 0, // skip the first n documents
    // },
    // {
    //     $limit: 10, // limit the number of documents returned
    // },
  ]).toArray();
  return res.json({
    users,
  });
};
export const getAllUsers2 = async (req, res, next) => {
  // const cursor = User.find();
  // let users = [];
  // while (await cursor.hasNext()) {
  //     const user = await cursor.next();
  //     console.log({user});
  //     users.push(user);
  // }
  // return res.status(200).json({
  //     message: "Users fetched successfully",
  //     success: true,
  //     data: users,
  // });
  const users = await User.find(
    {},
    {
      projection: {
        name: 1,
      },
      limit: 1, // limit the number of documents returned
      skip: 0, // skip the first n documents
    }
  ).toArray();
  return res.status(200).json({
    message: "Users fetched successfully",
    success: true,
    data: users,
  });
};
export const updateUser = async (req, res, next) => {
  const user = await User.findOneAndUpdate(
    // findOneAndUpdate >> update one document and return it
    { _id: new ObjectId(req.params.id) },
    {
      $set: { ...req.body }, // set:{}
      //$set: req.body,
    },
    {
      returnDocument: "after", // return the updated document // by default it returns the original document(before update)
    }
  );
  return res.status(200).json({
    message: "User updated successfully",
    success: true,
    data: user,
  });
};
export const updateUser2 = async (req, res, next) => {
  const user = await User.findOneAndReplace(
    // findOneAndReplace >> it replaces the entire document // بتشيل كل اللى موجود فى الدوك وتحط اللى بعته
    { _id: new ObjectId(req.params.id) },
    {
      ...req.body,
    },
    {
      returnDocument: "after", // return the updated document // by default it returns the original document(before update)
    }
  );
  return res.status(200).json({
    message: "User updated successfully",
    success: true,
    data: user,
  });
};
