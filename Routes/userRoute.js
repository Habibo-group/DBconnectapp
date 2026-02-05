import express from "express";
import { createUser } from "../Controllers/usercontroller.js";

export const router= express.Router();

router.post("/insert",createUser);

export default router;