const routes = require('express').Router();
const projectController = require('../controllers/ProjectController');
routes.post("/project/addproject", projectController.addProject);
routes.get("/project/getallprojects", projectController.getallProjects);


module.exports = routes;