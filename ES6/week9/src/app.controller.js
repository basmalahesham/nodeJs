//manage(control) req
import userRouter from './modules/user/user.controller.js';
const bootstrap = (app, express) => {
    // ================= middlewares 
    // ================= body parser - to parse json data => parse req
    app.use(express.json());
    // ================= routers
    // ================= user
    app.use('/user',userRouter);

    // just for testing
    app.get('/', (req, res, next) => {
        return res.json({ message: 'done' });
    });
};
export default bootstrap;