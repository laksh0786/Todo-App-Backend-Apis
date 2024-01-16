//importing todoSchema
const todoSchema = require("../models/Todo");

//defining route handler

exports.getTodo = async(req , resp)=>{
    try{

        //fetching all the todos from the database
        const todos = await todoSchema.find({});

        //response
        resp.status(200).json(
            {
                success:true,
                data:todos,
                message:"All todos fetched successfully"
            }
        )

    }
    catch(err){
        console.log("Error encountered --> ");
        console.error(err.message);
        resp.status(500).json(
            {
                success:false,
                error:err.message,
                message:"Internal server error",
            }
        )
    }
}


exports.getTodoById = async (req , resp)=>{
    try{
        
        //extracting todo-items on the basis of id

        //fetching id of the todo-item from the req.params
        const id = req.params.id;

        //fetching the todo-item from the database on the basis of id using findById method
        const singleTodo = await todoSchema.findById({_id: id}); 


        //no todo-item found on the basis of id
        if(!singleTodo){
            return resp.status(404).json({
                success:false,
                error:"No todo found",
                message:"No todo found with the given id"
            })
        }

        //todo-item found on the basis of id
        resp.status(200).json({
            success:true,
            data:singleTodo ,
            message:`Todo of id : ${id} fetched successfully`
        })


    }
    catch(err){
        console.log("Error -->");
        console.error(err.message);

        resp.status(500).json({
            success:false,
            error:err.message,
            message:"Internal server error"
        })
    }
}