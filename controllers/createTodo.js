//Firstly to create a todo we need to import the Todo model
const Todo = require("../models/Todo");

//now as we handle events using event handler
//we will create route handler as we come in this controller to handle the route requests


//In this we will use exports.createTodo which is similar to named export 

exports.createTodo = async(req , resp)=>{
    try{
        //extract the data from the req.body
        const {title , description} = req.body;

        //create a new todo object and save it to the database
        const response = await Todo.create({title,description});

        //send a json response with success flag
        resp.status(200).json({
            success:true , 
            data:response ,
            message:"Entry created successfully"
        })
    }
    catch(err){
        console.log("Error --> ");
        console.error(err.message);
        resp.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message
        })
    }
}



//In this we will use module.exports which is similar to default export

// const createTodo = async(req , resp)=>{
//     try{
//         //extract the data from the req.body
//         const {title , description} = req.body;

//         //create a new todo object and save it to the database
//         const todo = await Todo.create({title,description});

//         //send a json response with success flag
//         resp.status(200).json({
//             success:true , 
//             data:response ,
//             message:"Entry created successfully"
//         })
//     }
//     catch(err){
//         console.log("Error --> ");
//         console.error(err.message);
//         resp.status(500).json({
//             success:false,
//             data:"internal server error",
//             message:err.message
//         })
//     }
// }

// module.exports = createTodo; 



