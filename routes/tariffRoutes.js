import { Router } from "express";
import {
    getTariffList,
    postCreateTariff,
    putTariff,
    deleteTariff,
    // getTariff
} from "../controllers/tariffControllers.js";

const router = Router();

router.get("/tariff", getTariffList);
router.post("/tariff", postCreateTariff);
router.put("/tariff/:id", putTariff);
router.delete("/tariff/:id", deleteTariff);
// For search data, but still on build it
// router.get("/tariff/:id", getTariff);

export default router;