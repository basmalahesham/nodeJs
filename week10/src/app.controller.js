import { checkConnection, syncModels } from "./db/connection.js";

const bootstrap = async (app,express)=> {
    // parse req
    app.use(express.json());
    // connect to db
    await checkConnection();
    // sync models
    await syncModels();
    app.get('/', (req, res,next) => {
        res.json({message:'done'});
    });
};
export default bootstrap;