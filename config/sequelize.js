import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const sequelize = new Sequelize(process.env.MYSQL_URL, {
  logging: false, // Disable logging
});

export default sequelize;