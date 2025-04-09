const userTaskModel = require("../models/UserTaskModel")

const addUserTask = async (req, res) => {
    try {
        const createUserTask = await userTaskModel.create(req.body)
        res.status(201).json({
            message: "user task added...",
            data: createUserTask
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "error",
            data: err
        })
    }
}

const deleteUserTask = async (req, res) => {
    try {
        const deletedUserTask = await userTaskModel.findByIdAndDelete(req.params.id)
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

const getAllUserTask = async (req, res) => {
    try {
        const userTask = await userTaskModel.find().populate("userId")
            .populate("taskId")
        res.status(200).json({
            message: "all user task fetched.....",
            data: userTask
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "error",
            data: err
        })
    }

}

const getUserTaskById = async (req, res) => {
    try {
        const UserTaskById = await userTaskModel.findById(req.params.id)
        res.status(200).json({
            message: "user task fetched by id...",
            data: UserTaskById
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "error...",
            data: err
        })
    }
}

module.exports = { addUserTask ,getAllUserTask ,deleteUserTask ,getUserTaskById }

