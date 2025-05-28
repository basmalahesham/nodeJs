// import module
/* import express from "express";
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
}); 
// node-express
*/
import express from 'express';
import bootstrap from './src/app.controller.js';
const app = express();
bootstrap(app, express);
const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port}!`));