const userModel = require("../models/UserModel");
const bcrypt = require("bcrypt");

const loginUser = async (req,res) => {

  const email = req.body.email;
  const password = req.body.password;

  const foundUserFromEmail = await userModel.findOne({email:email}).populate("roleId")
  console.log(foundUserFromEmail)

  if(foundUserFromEmail != null){

    const isMatch = bcrypt.compareSync(password, foundUserFromEmail.password)
    if(isMatch == true){
      res.status(200).json({
        message:"login success",
        data:foundUserFromEmail,
      });
    }else{
      res.status(404).json({
        message:"invalid cred..",
      });
    }
  }else{
    res.status(404).json({
      message:"Email not found.. ",
    });
  }
};


const signup  = async(req,res)=>{

  //try catch if else...
  try {
    //password encrupt..
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hashedPassword;
    const createdUser = await userModel.create(req.body);
    res.status(201).json({
      message: "user created..",
      data: createdUser,
    });
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: "error",
      data: err,
    });
  }
};

const getAllUsers = async(req,res)=>{


  const users = await userModel.find().populate("roleId")
  res.json({
      message:"User fetched successfully..",
      data:users
  })



}

const addUser = async (req, res) => {
  //req.body,req.params,req.headers,req.query
  //console.log("request body....", req.body);
  //insert into user () values()
  //database...
  const savedUSer = await userModel.create(req.body)

  res.json({
    message:"user created...",
    data:savedUSer
  });
};

const deleteUser = async(req,res)=>{

    //delete from user where id =?
    //req.params
    //console.log(req.params.id) //prams object...

    const deletedUser = await userModel.findByIdAndDelete(req.params.id)

    res.json({
      message:"user deleted successfully..",
      data:deletedUser
    })
}

const getUserById = async (req,res)=>{
  const foundUser = await userModel.findById(req.params.id)
  res.json({
    message:"user fatched..",
    data:foundUser
  })
}


module.exports = {
  addUser,deleteUser,getUserById,signup,getAllUsers,loginUser
};











//chatgpt code after Role object
// const userModel = require("../models/UserModel");
// const roleModel = require("../models/roleModel"); // Role model import karo
// const bcrypt = require("bcrypt");

// const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const foundUser = await userModel.findOne({ email }).populate("roleId");

//     if (!foundUser) {
//       return res.status(404).json({ message: "Email not found" });
//     }

//     const isMatch = bcrypt.compareSync(password, foundUser.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     res.status(200).json({
//       message: "Login successful",
//       data: foundUser,
//     });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// const signup = async (req, res) => {
//   try {
//     const { firstName, lastName, age, email, password, role } = req.body;

//     // Role ka ObjectId find karo
//     const roleData = await roleModel.findOne({ name: role });
//     if (!roleData) {
//       return res.status(400).json({ message: "Invalid role selected" });
//     }

//     // Password encrypt karo
//     const salt = bcrypt.genSaltSync(10);
//     const hashedPassword = bcrypt.hashSync(password, salt);

//     // User create karo with roleId
//     const createdUser = await userModel.create({
//       firstName,
//       lastName,
//       age,
//       email,
//       password: hashedPassword,
//       roleId: roleData._id, // Assign roleId
//     });

//     res.status(201).json({
//       message: "User created successfully",
//       data: createdUser,
//     });
//   } catch (error) {
//     console.error("Signup error:", error);
//     res.status(500).json({ message: "Error creating user", data: error });
//   }
// };

// const getAllUsers = async (req, res) => {
//   try {
//     const users = await userModel.find().populate("roleId");
//     res.json({
//       message: "Users fetched successfully",
//       data: users,
//     });
//   } catch (error) {
//     console.error("Get users error:", error);
//     res.status(500).json({ message: "Error fetching users" });
//   }
// };

// const addUser = async (req, res) => {
//   try {
//     const savedUser = await userModel.create(req.body);
//     res.json({
//       message: "User created successfully",
//       data: savedUser,
//     });
//   } catch (error) {
//     console.error("Add user error:", error);
//     res.status(500).json({ message: "Error adding user" });
//   }
// };

// const deleteUser = async (req, res) => {
//   try {
//     const deletedUser = await userModel.findByIdAndDelete(req.params.id);
//     res.json({
//       message: "User deleted successfully",
//       data: deletedUser,
//     });
//   } catch (error) {
//     console.error("Delete user error:", error);
//     res.status(500).json({ message: "Error deleting user" });
//   }
// };

// const getUserById = async (req, res) => {
//   try {
//     const foundUser = await userModel.findById(req.params.id);
//     res.json({
//       message: "User fetched successfully",
//       data: foundUser,
//     });
//   } catch (error) {
//     console.error("Get user by ID error:", error);
//     res.status(500).json({ message: "Error fetching user" });
//   }
// };

// module.exports = {
//   addUser,
//   deleteUser,
//   getUserById,
//   signup,
//   getAllUsers,
//   loginUser,
// };
