import { Router } from "express";
import {
    getBillingList,
    postCreateBilling,
    putBilling,
    deleteBilling,
    // getBilling
} from "../controllers/billingControllers.js";

const router = Router();

router.get("/billing", getBillingList);
router.post("/billing", postCreateBilling);
router.put("/billing/:id", putBilling);
router.delete("/billing/:id", deleteBilling);
// For search data, but still on build it
// router.get("/billing/:id", getBilling);

export default router;