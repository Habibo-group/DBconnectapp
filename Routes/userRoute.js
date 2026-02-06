import express from "express";
import { createUser ,find,findAll} from "../Controllers/usercontroller.js";

export const router= express.Router();

router.post("/insert",createUser);

router.get("/findall",findAll)

router.get("/:id", find)

export default router;