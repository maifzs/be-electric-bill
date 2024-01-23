import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Billing = sequelize.define(
  "Billing",
  {
    billing_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tahun_tagihan: DataTypes.STRING,
    bulan_tagihan: DataTypes.INTEGER,
    pemakaian: DataTypes.INTEGER,
  },
  {
    tableName: "billing", // Explicitly set the table name
    timestamps: false,
  }
);

export default Billing;