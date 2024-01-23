import { Router } from "express";
import {
    getUserList,
    postCreateUser,
    putUser,
    deleteUser,
    // getUser
} from "../controllers/userControllers.js";

const router = Router();

router.get("/user", getUserList);
router.post("/user", postCreateUser);
router.put("/user/:id", putUser);
router.delete("/user/:id", deleteUser);
// For search data, but still on build it
// router.get("/user/:id", getUser);

export default router;