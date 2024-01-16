//Creating a model for todo
//Model is nothing but schema for the data to be stored in the database
//descrition of data is called schema

//to create a model we need to import mongoose
const mongoose = require("mongoose");

//creating a schema
const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        } , 
        description:{
            type:String,
            required:true,
            maxLength:80,
        },
        createdAt : {
            type:Date , 
            required:true , 
            default:Date.now(),
        },
        updatedAt:{
            type:Date , 
            required:true , 
            default:Date.now(),
        }

    }
);

//Now to export the schema we need to create a model
//model takes two arguments
//1. Name of the model
//2. Schema of the model
//The model name should be singular and first letter should be capital
module.exports = mongoose.model("Todo"  , todoSchema);