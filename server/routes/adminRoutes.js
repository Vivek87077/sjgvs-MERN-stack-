import express from "express";
import {
  createAdmin,
  loginAdmin
} from "../controllers/adminController.js";

import { protect } from "../middleware/auth.js"; 
import Donation from "../models/Donation.js";

const router = express.Router();

// Public routes
router.post("/register", createAdmin);
router.post("/login", loginAdmin);

// 🔐 Protected route
router.get("/dashboard", protect, (req,res)=>{
  res.json({msg:"Welcome Admin"});
});

// Get All Donations - Protected route
router.get("/donations", protect, async (req,res)=>{
  try{
    const donations = await Donation.find().sort({createdAt:-1});
    res.json(donations);
  }catch(err){
    res.status(500).json({msg:err.message});
  }
});

export default router;
