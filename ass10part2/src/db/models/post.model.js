import { Schema, model, Types } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      validate: {
        validator: (value) => {
          return value !== value.toUpperCase();
        },
        message: "Title must not be all uppercase",
      },
    },
    content: {
      type: String,
      required: true,
    },
    userId: {
      type: Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Post = model("post", postSchema);
