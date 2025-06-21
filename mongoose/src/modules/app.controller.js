import connectDB from "../db/connection.js";
import userRouter from "../modules/user/user.controller.js";

const bootstrap = async (app, express) => {
  // Middleware to parse JSON bodies to objects
  app.use(express.json());
  // connect to db
  await connectDB();
  // import routes
  app.use("/user", userRouter);

  // handel invalid req
  app.use((req, res, next) => {
    res.status(404).json({
      success: false,
      message: "invalid url",
    });
  });
};
export default bootstrap;