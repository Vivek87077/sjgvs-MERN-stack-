import Admin from "../models/Admin.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createAdmin = async (req,res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);

  const admin = await Admin.create({
    email: req.body.email,
    password: hashed
  });

  res.json(admin);
};

export const loginAdmin = async (req,res) => {

  console.log("BODY RECEIVED:", req.body);
  const admin = await Admin.findOne({email:req.body.email});
  if(!admin) return res.status(400).json({msg:"Invalid email"});

  const match = await bcrypt.compare(req.body.password, admin.password);
  if(!match) return res.status(400).json({msg:"Wrong password"});

  const token = jwt.sign(
    {id:admin._id},
    process.env.JWT_SECRET,
    {expiresIn:"1d"}
  );

  res.json({token});
};