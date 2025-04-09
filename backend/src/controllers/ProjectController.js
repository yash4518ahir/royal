const projectModel = require("../models/ProjectModel");

const addProject = async (req, res) => {
  try {
    const savedProject = await projectModel.create(req.body);
    res.status(201).json({
      message: "Project added successfully",
      data: savedProject,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const getallProjects = async (req, res) => {
  try {
    const projects = await projectModel.find();
    res.status(200).json({
      message: "All projects",
      data: projects,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = { addProject,getallProjects };