import connectDB from "../db/connection.js";
import userRouter from "../modules/user/user.controller.js";
import postRouter from "../modules/post/post.controller.js";

const bootstrap = async (app, express) => {
  app.use(express.json());
  await connectDB();

  app.use("/users", userRouter);
  app.use("/posts", postRouter);

};

export default bootstrap;
