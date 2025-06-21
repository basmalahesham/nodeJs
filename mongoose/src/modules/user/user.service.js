import { User } from "../../db/model/user.model.js";

export const createUser = async (req, res, next) => {
  try {
    /*// new instance
   const user = new User(req.body);
   // user >> object >> document >> instance User >> {_id,createdAt,updatedAt,...}
   const createdUser = await user.save(); // do 2 things create if not exist, (_id) update document if exist
   **/

    /*// create method
    const createdUser = await User.create(req.body);**/

    // insert many
    const createdUsers = await User.insertMany([req.body]);
    return res.status(201).json({
      message: "User created successfully",
      success: true,
      data: createdUsers,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    // const users = await User.find(
    //   {
    //     // filter
    //     //age:req.query.age,
    //   },
    //   //   // projection >> has 2 ways >> each way has 2 ways
    //   //'userName email age gender -_id', // projection >> -_id means exclude _id
    //   {
    //     // projection
    //   },
    //   // {
    //   //   // projection
    //   //   userName: 1, // cannot do enclusion and exclusion at the same time
    //   //   email: 1,
    //   //   gender: 1,
    //   //   age: 1,
    //   //   //_id: 0, // special
    //   // },
    //   {
    //     // options
    //     //sort: { age: 1 }, // sort by age in ascending order
    //     // sort: { age: -1 }, // sort by age in descending order
    //     //limit: 2, // limit the number of documents returned
    //     //skip: 2, // skip the first n documents
    //   }
    // ).sort({age:1}).skip(2).select({
    //   // projection
    //   userName: 1, // include userName
    //   email: 1, // include email
    //   age: 1, // include age
    //   gender: 1, // include gender
    // });
    //select("userName email age gender");// another way to do projection

    // const query = User.find({},{
    //   userName: 1, // include userName
    //   email: 1, // include email
    //   age: 1, // include age
    //   gender: 1,
    // },{});// find return [{},{}] >> array of objects | []
    // query.sort({ age: 1 }); // user.find()
    // query.skip(2); // user.find().sort()
    // query.limit(2); // user.find().sort().skip()
    // const users = await query; // user.find().sort().skip().limit()
    // if (users.length == 0) {
    //   return res.status(404).json({
    //     message: "No users found",
    //     success: false,
    //   });
    // }

    // if(req.query.id.length !=24){
    //   return res.status(400).json({
    //     message: "Invalid user ID format",
    //     success: false,
    //   });
    // }
    //const user = await User.findOne({_id:req.query.id},{},{}); // findOne return {} >> object | null

    const user = await User.findById(req.query.id, {}, {}); // findById returns {} >> object | null
    return user
      ? res.status(200).json({
          message: "Users fetched successfully",
          success: true,
          data: user,
        })
      : res.status(404).json({
          message: "User not found",
          success: false,
        });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

export const updateUser = async (req, res, next) => {
  try {
    // User.updateOne
    //const result = await User.updateOne({_id:req.params.id},req.body);//{}
    // User.updateMany
    //const result = await User.updateMany({_id:req.params.id}, req.body, );
    //const result = await User.updateMany({_id:{$in:req.body.ids}},{role:"admin"});
    // User.findOneAndUpdate
    // const result = await User.findOneAndUpdate(
    //   { _id: req.params.id },
    //   req.body,
    //   { 
    //     //returnDocument: "after" 
    //     new: true, // return the updated document
    //   }
    // ); // returns the original document by default
    // User.findOneAndReplace
    //  const result = await User.findOneAndReplace(
    //    { _id: req.params.id },
    //     req.body,
    //     {
    //       //returnDocument: "after"
    //       new: true, // return the updated document
    //     }); // findOneAndReplace replaces the entire document with the new one
    // User.findByIdAndUpdate
    // const result = await User.findByIdAndUpdate(
    //   req.params.id,
    //   req.body,
    //   { 
    //     //returnDocument: "after" 
    //     new: true, // return the updated document
    //   }
    // );
    // save
    // const user = await User.findByIdAndUpdate(
    //   req.params.id,
    //   req.body,
    //   { new: true } // return the updated document
    // );
    return res.status(200).json({
      message: "User updated successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};
