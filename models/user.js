import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    hak_akses: DataTypes.INTEGER,
  },
  {
    tableName: "user", // Explicitly set the table name
    timestamps: false,
  }
);

export default User;