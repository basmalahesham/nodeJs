// ========================== express ============================
// Fast, unopinionated, minimalist web framework for Node.js
// npm >> node package manager
// pnpm
// yarn
// npm init -y >> create package.json file
const path = require("path"); // any built-in module write it before third-party module
const express = require("express");
const app = express(); // create an instance of express // Creates an Express application. The express() function is a top-level function exported by the express module.
app.use(express.json()); // express middleware function for parsing data // operate from the line you write
let users = [ // array first data structure >> ram >> volatile
    { id: 1, userName: "shoura", password: "1234" },
    { id: 2, userName: "ahmed", password: "1234" },
    { id: 3, userName: "mohamed", password: "1234" },
    { id: 4, userName: "ali", password: "1234" },
];
// CRUD operations >> create, read, update, delete >> RESTful API >> Representational State Transfer >> HTTP methods >> GET, POST, PUT, DELETE
// read
// method >> get , url >> /users
app.get("/users", (req, res, next) => {
    //2 express methods >> send or json
    // send() calling >> res.writeHead() >> res.write(body) >> res.end()
    //res.send('hello from express');
    //res.writeHead(200,{'Content-Type':'application/json'}); // error >> cannot set headers after they are sent to the client
    //res.setHeader('Content-Type','text/plain');//setHeader >> express method
    //res.send("<h1>hello from express</h1>"); // (express) detect the content type of the data automatically
    //res.status(200/**status code */).send("<h1>hello from express</h1>");
    //res.send({message:'done from express'});
    //res.json({message:'done from express'}); // content-type >> application/json // دة الفرق بين send و json
    res.json(users);
});

// method >> get , url == /file >> response >> file
app.get("/file", (req, res, next) => {
    //res.sendFile(__dirname + '/index.html'); // sendFile('absolute path') >> express method
    res.sendFile(path.join(__dirname, "./index.html")); // sendFile('absolute path') >> express method
    //res.status(200).sendFile(path.join(__dirname,'./index.html')); // sendFile('absolute path') >> express method
});

//add product >> method >> post , url == /add-product
// let isAdmin = true;
// app.post('/add-product',(req,res,next)=>{
//     //res.send('product added successfully');
//     if(isAdmin){
//         res.send('product added successfully');
//     }else res.status(401/**Unauthorized */).send('not allowed')
// });

// // update product >> method >> put , url == /update-product
// app.put('/update-product',(req,res,next)=>{
//     if (isAdmin) res.send('product updated successfully');
//     else res.status(401/**Unauthorized */).send('not allowed')
// });

//=========================== middleware ===========================
// middleware >> function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
// function >> takes three positional parameters >> req, res, next >> call next()

/* function checkAdmin(req,res,next){
    if(isAdmin){
        next(); // call the next middleware function in the stack
    }else{
        return res.status(401).send('not allowed for you');
        //return; // stop the execution of the code after sending the response // بترجع مكان ما السكوب واقف
    }
} */

function checkAdmin() {
    return (req, res, next) => {
        if (isAdmin) {
            next(); // call the next middleware function in the stack
        } else {
            return res.status(401).send("not allowed for you");
            //return; // stop the execution of the code after sending the response // بترجع مكان ما السكوب واقف
        }
    };
}

let isAdmin = false;
app.post("/add-product", checkAdmin(), (req, res, next) => {
    res.send("product added successfully");
});

// update product >> method >> put , url == /update-product
app.put("/update-product", checkAdmin(), (req, res, next) => {
    res.send("product updated successfully");
});

/* function parseRequest() {
    return (req, res, next) => {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            body = JSON.parse(body);
            req.body = body;
            next();
        });
    };
} */

// signup >> post >> /signup
/* app.post("/signup", parseRequest(), (req, res, next) => {
    console.log(req.body);
}); */

app.post(
    "/signup",
    express.json() /**builtin middleware from express for parsing body */,
    (req, res, next) => {
        console.log(req.body);
        // get data from request
        const { userName, password } = req.body;
        // check user existence
        const userExist = users.find((user) => user.userName == userName); // obj || undefined
        // handle fail case
        if (userExist) {
            return res.status(409/**conflict */).json({message:'user already exist'})
        }
        // add user 
        users.push({ userName, password,id:Date.now() });
        // send response
        return res.status(201/**created */).json({message:'user created successfully'});
    }
);

// update user >> put >> /user/:id
//:id // كدا انا قولتله ان دة var
app.put('/user/:id',(req,res,next)=>{
    //console.log(req.body);
    // get data from req
    const {userName,password} = req.body;
    // get id from req
    const {id} = req.params; // حسب ال param اللى باعتهم فى ال url
    // check user existence
    const userExist = users.find((user) => user.id == id);//obj || undefined
    // handle fail case
    if(!userExist){
        return res.status(404/** user not found */).json({message:'user not found'})
    }
    // update user
    userExist.userName = userName;
    userExist.password = password;
    // send response
    return res.status(200/**ok */).json({message:'user updated successfully'});
});

// search user >> get >> /user?userName=shoura&id=13&phone=010
//                            ?queryParams
app.get('/user',(req,res,next)=>{
    // get data from req
    const {userName} = req.query;
    const user = users.find((user)=>user.userName==userName);//obj || undefined
    return res.status(200).json({message:"done",data:user})
});

const port = 3000; // port number
const server = app.listen(port, () => {
    //console.log("Server is running on port",port);
    console.log(`Server is running on port:${port}`);
});
server.on("error", (error) => {
    //console.log(error.message);// log the error message (default color >> white color)
    console.error(error.message); // log the error message (red color)
    //console.warn(error.message);// log the error message (yellow color)
    //console.info(error.message);// log the error message (blue color)
});
