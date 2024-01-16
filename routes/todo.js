const express = require("express");

// create a router : to create routes
const router = express.Router();


//import controller

//It is done when exported using exports.createTodo (something like named export)
const {createTodo} = require("../controllers/createTodo");
const {getTodo , getTodoById} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");

//It is done when exported using module.exports (something like default export)
// const createTodo = require("../controllers/createTodo");
// const getTodo = require("../controllers/getTodo");

//define api routes
router.post("/createTodo" , createTodo);
router.get("/getTodos" , getTodo);
router.get("/getTodos/:id" , getTodoById);
router.put("/updateTodo/:id" , updateTodo);
router.delete("/deleteTodo/:id" , deleteTodo);




module.exports = router;