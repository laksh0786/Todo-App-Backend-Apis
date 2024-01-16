//Require imports the express module

const express = require("express");
const app = express();


//load config form .env file
require("dotenv").config(); 
const PORT = process.env.PORT || 4000;
// console.log(PORT);


//middleware to parse the json req.body
app.use(express.json());

//imports routes for to-do api
const todoRoutes = require("./routes/todo");

//mounting the routes -- to-do api routes
app.use("/api/v1",todoRoutes);


app.listen(PORT,()=>{
    console.log("Server is running on port " , PORT);
})


//Connection to database
const dbConnect = require("./config/database");
dbConnect();



//Default route
app.get("/" , (req , res)=>{
    res.send(`<h1>This is Index Page</h1>`);
})

