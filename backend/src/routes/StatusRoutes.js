const routes=require('express').Router()

const statusController=require("../controllers/StatusController")
const { route } = require('./ProjectTeamRoutes')

routes.post("/status",statusController.addStatus)
routes.delete("/status/:id",statusController.deleteStatus)
routes.get("/status",statusController.getStatus)
routes.get("/status/:id",statusController.getStatusById)

module.exports=routes
