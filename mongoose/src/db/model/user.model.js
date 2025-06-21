import { Schema, model } from "mongoose";
// schema
const userSchema = new Schema(
  {
    //field : dataType
    userName: {
      type: String,
      required: true,
      minlength: 2, // validation >> this will restrict the length of the string
      maxlength:20, // validation >> this will restrict the length of the string
    },
    email: {
      type: String,
      required: true,
      unique: true,
      toLowerCase: true, // this will convert the email to lowercase before saving it to the db
    },
    password: {type:String,required:true},
    age: {
        type:Number,
        min: [18,'age must be greater than or equal 18'], // validation >> this will restrict the value to be greater than or equal to 18
        max: 80, // validation >> this will restrict the value to be less than or equal to 100
    },
    gender: {
      type: String,
      enum: ["male", "female"], // validation >> this will restrict the values to only
    },
    isConfirmed: {
      type: Boolean,
      default: false, // default value
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now(), // default value
    // },
  },
  { timestamps: true,versionKey:false } // this will add createdAt and updatedAt fields automatically
);
// model
export const User = model("user", userSchema); // user is the name of the collection in the db >> user => users
