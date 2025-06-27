import { connectionDB } from "./db/connection.js";
import studentRouter from "./modules/student/student.controller.js";
const bootstrap = async (app, express) => {
  // parse body
  app.use(express.json());
  // routers
  app.use("/students", studentRouter);
  // connect to the database
  await connectionDB();
};
export default bootstrap;
