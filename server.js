import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import { startSequelize } from "./utils/startSequelize.js";

const app = express();
const port = process.env.PORT | 3000;

import userRoutes from "./routes/userRoutes.js"; // user
import tariffRoutes from "./routes/tariffRoutes.js"; // tariff
import customerRoutes from "./routes/customerRoutes.js"; // customer
import billingRoutes from "./routes/billingRoutes.js"; // billing

dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw());
app.use(bodyParser.json());

app.use("/", userRoutes);
app.use("/", tariffRoutes);
app.use("/", customerRoutes);
app.use("/", billingRoutes);

startSequelize();

app.listen(port, () => {
  console.log(`Server is running at port http://localhost:${port}`);
});