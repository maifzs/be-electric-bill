import { Router } from "express";
import {
    getCustomerList,
    postCreateCustomer,
    putCustomer,
    deleteCustomer,
    // getCustomer
} from "../controllers/customerControllers.js";

const router = Router();

router.get("/customer", getCustomerList);
router.post("/customer", postCreateCustomer);
router.put("/customer/:id", putCustomer);
router.delete("/customer/:id", deleteCustomer);
// For search data, but still on build it
// router.get("/customer/:id", getCustomer);

export default router;