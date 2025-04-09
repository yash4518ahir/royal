const statusModel=require("../models/StatusModel")

const addStatus=async(req,res)=>{
    try{
        const createStatus=await statusModel.create(req.body)
        res.status(201).json({
            message:"status added...",
            data:createStatus
        })

    }catch(err){
        console.log(err)
        res.status(500).json({
            message:"error..",
            data:err
        })
    }
}


const deleteStatus=async(req,res)=>{
    try{
        const deletedStatus=await statusModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message:"status deleted...."
        })

    }catch(err){
        console.log(err)
        res.status(500).json({
            message:"error",
            data:err
        })

    }
}

const getStatus=async(req,res)=>{
    try{
        const status=await statusModel.find()
        res.status(200).json({
            message:"status fetched...",
            data:status
        })
        
    }catch(err){
        console.log(err)
        res.status(500).json({
            message:"error",
            data:err
        })
    }
}

const getStatusById=async(req,res)=>{
    try{
        const statusById=await statusModel.findById(req.params.id)
        res.status(200).json({
            message:"status find by id..",
            data:statusById
        })

    }catch(err){
        console.log(err)
        res.status(500).json({
            message:"error",
            data:err
        })
    }
}

module.exports={ getStatus ,getStatusById ,addStatus ,deleteStatus}