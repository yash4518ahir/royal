const routes=require("express").Router()

const projectTeamController=require("../controllers/ProjectTeamController")

routes.post("/team",projectTeamController.addProjectTeam)
routes.delete("/team/:id",projectTeamController.deleteProjectTeam)
routes.get("/team",projectTeamController.getAllProjectTeam)
routes.get("/team/:id",projectTeamController.getProjectTeamById)


module.exports=routes