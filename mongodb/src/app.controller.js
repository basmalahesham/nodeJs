import { connectionDB } from "./db/connection.js";
import productRouter from "./modules/product/product.controller.js";
import userRouter from "./modules/user/user.controller.js";
const bootstrap = async (app, express) => {
    // parse body
    app.use(express.json());
    // routers
    app.use("/product",productRouter);
    app.use('/user',userRouter);
    // connect to the database
    await connectionDB();
};
export default bootstrap;