import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Tariff = sequelize.define(
  "Tariff",
  {
    tariff_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    kdtarif: DataTypes.STRING,
    beban: DataTypes.INTEGER,
    tarif_perkwh: DataTypes.INTEGER,
  },
  {
    tableName: "tariff", // Explicitly set the table name
    timestamps: false,
  }
);

export default Tariff;