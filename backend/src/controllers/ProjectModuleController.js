const projectModuleModel=require("../models/ProjectModuleModel")

const addProjectModule=async(req,res)=>{
    try{
        const createProjectModule=await projectModuleModel.create(req.body)
        res.status(201).json({
            message:"project module added...",
            data:createProjectModule
        })

    }catch(err){
        console.log(err)
        res.status(500).json({
            message:"error",
            data:err
        })
    }
}

const deleteProjectModule=async(req,res)=>{
    try{
        const deletedProjectModule=await projectModuleModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message:"projectModule deleted...."
        })

    }catch(err){
        console.log(err)
        res.status(500).json({
            message:"error",
            data:err
        })

    }
}

const getAllProjectModule=async(req,res)=>{
    try{
        const projectModule=await projectModuleModel.find().populate("projectId");
        res.status(200).json({
            message:"all projectModule fetched.....",
            data:projectModule
        })

    }catch(err){
        console.log(err)
        res.status(500).json({
            message:"error",
            data:err
        })
    }

}

const getProjectModuleById=async(req,res)=>{
    try{
        const projectModuleById=await projectModuleModel.findById(req.params.id)
        res.status(200).json({
             message:"project Module fetched by id...",
             data:projectModuleById
        })
        
    }catch(err){
        console.log(err)
        res.status(500).json({
            message:"error...",
            data:err
        })
    }
}

module.exports={addProjectModule ,getAllProjectModule ,getProjectModuleById ,deleteProjectModule}
