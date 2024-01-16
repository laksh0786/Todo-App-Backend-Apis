const mongoose = require("mongoose");

//Process is a global object that provides information about, and control over, the current Node.js process. As a global, it is always available to Node.js applications without using require(). It can also be explicitly accessed using require():

//After installing dotenv, we can use the config method to load the environment variables from the .env file into process.env
//Using below code, all the data in the .env file will be loaded into process.env

require("dotenv").config();
console.log(process.env.DB_URL);
// const dbUrl = process.env.DB_URL;


const dbConnect = ()=>{
    mongoose.connect( process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log("Connection Successful");
    })
    .catch((err)=>{
        console.log("Error :");
        console.error(err.message);
        process.exit(1);
    })
}

module.exports = dbConnect;