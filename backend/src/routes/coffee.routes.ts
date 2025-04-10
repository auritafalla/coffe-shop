import express from "express";
import { getCoffees } from "../controllers/coffee.controller";

const router = express.Router();

router.get("/", getCoffees);

export default router;
