const taskModel = require("../models/TaskModel")

const addTask = async (req, res) => {
    try {
        const createTask = await taskModel.create(req.body)
        res.status(201).json({
            message: "task added...",
            data: createTask
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "error",
            data: err
        })
    }
}

const deleteTask = async (req, res) => {
    try {
        const deletedTask = await taskModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "task deleted...."
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "error",
            data: err
        })

    }
}

const getAllTask = async (req, res) => {
    try {
        const task = await taskModel.find().populate("moduleId", "moduleName")
            .populate("projectId", "title")
          
        res.status(200).json({
            message: "all task fetched.....",
            data: task
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "error",
            data: err
        })
    }

}

const getTaskById = async (req, res) => {
    try {
        const taskById = await taskModel.findById(req.params.id)
        res.status(200).json({
            message: "task fetched by id...",
            data: taskById
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "error...",
            data: err
        })
    }
}

module.exports = { addTask, deleteTask, getAllTask, getTaskById }

