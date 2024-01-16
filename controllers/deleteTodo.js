//import todoSchema from "../models/Todo";
const todoSchema = require("../models/Todo");


//defining route handler

exports.deleteTodo = async (req, resp) => {

    try {

        //fetching todo-item on the basis of id and deleting it

        //fetching id of the todo-item from the req.params
        const { id } = req.params;

        //fetching the todo-item from the database on the basis of id using findByIdAndDelete method
        const response = await todoSchema.findByIdAndDelete(id);

        //sending the response
        resp.status(200).json({
            success:true , 
            data:response  , 
            message:`Todo of id : ${id} deleted successfully`
        })
    }

    catch (err) {
        console.error("Error--> " , err.message);
        resp.status(500).json({
            success:false,
            error:err.message , 
            message:"Internal server error"
        })
    }

}