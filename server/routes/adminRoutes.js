import express from "express";
import {
  createAdmin,
  loginAdmin
} from "../controllers/adminController.js";

import { protect } from "../middleware/auth.js";  // ✅ yeh add hona chahiye

const router = express.Router();

// Public routes
router.post("/register", createAdmin);
router.post("/login", loginAdmin);

// 🔐 Protected route
router.get("/dashboard", protect, (req,res)=>{
  res.json({msg:"Welcome Admin"});
});

export default router;
