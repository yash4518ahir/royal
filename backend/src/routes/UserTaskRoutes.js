const routes=require("express").Router()

const userTaskController=require("../controllers/UserTaskController")

routes.post("/userTask",userTaskController.addUserTask)
routes.delete("/userTask/:id",userTaskController.deleteUserTask)
routes.get("/userTask",userTaskController.getAllUserTask)
routes.get("/userTask/:id",userTaskController.getUserTaskById)


module.exports=routes