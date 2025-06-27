import { Schema, model } from "mongoose";

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    min: [18, "Age must be >= 18"],
    max: [80, "Age must be <= 80"]
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  isConfirmed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true, versionKey: false });

export const User = model("user", userSchema);
