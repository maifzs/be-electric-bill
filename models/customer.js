import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Customer = sequelize.define(
  "Customer",
  {
    customer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_pelanggan: DataTypes.STRING,
    alamat: DataTypes.STRING,
  },
  {
    tableName: "customer", // Explicitly set the table name
    timestamps: false,
  }
);

export default Customer;