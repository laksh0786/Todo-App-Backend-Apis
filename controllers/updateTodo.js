//Importing the todoSchema from the models
const todoSchema = require("../models/Todo");


//defining route handler
exports.updateTodo = async (req, resp) => {

    try {

        //fetching the data and updating in db

        //fetching id of the todo-item from the req.params
        // const id = req.params.id;
        const { id } = req.params;

        //fetching the req items to be updated from the req.body
        const { title, description } = req.body;

        //updating the todo-item in the database using findByIdAndUpdate method
        
        //----> 1st syntax

        // const response = await todoSchema.findByIdAndUpdate(
        //     { _id: id },
        //     { title, description, updatedAt: Date.now() }
        // );


        //----> 2nd syntax : instead of writing { _id: id } we can directly pass the id as the first argument

        const response = await todoSchema.findByIdAndUpdate(
            id,
            { title, description, updatedAt: Date.now() } , 
        );

        //sending the response
        resp.status(200).json({
            success:true,
            data:response,
            message:`Todo of id : ${id} updated successfully`
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
