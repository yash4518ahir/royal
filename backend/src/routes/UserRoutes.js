const routes = require("express").Router()
const userController= require("../controllers/UserController")
routes.post("/users",userController.signup)
routes.delete("/user/:id",userController.deleteUser)
routes.get("/user/:id",userController.getUserById)
routes.get("/users",userController.getAllUsers)
routes.post("/user/login",userController.loginUser)

//v-imp
module.exports = routes