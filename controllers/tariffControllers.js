// import express from "express";
import {
  getAllTariff,
  createTariff,
  editTariff,
  dropTariff,
} from "../services/tariffServices.js";

export const getTariffList = async (req, res) => {
  const tariffList = await getAllTariff();
  res.json({
    data: tariffList,
  });
};

export const postCreateTariff = async (req, res) => {
  const { kdtarif, beban, tarif_perkwh } = req.body;
  await createTariff(kdtarif, beban, tarif_perkwh);
  const resData = res.status(201).send(resData);
};

export const putTariff = async (req, res) => {
  const tariff_id = req.params.id;
  const { kdtarif, beban, tarif_perkwh } = req.body;

  try {
    await editTariff(tariff_id, kdtarif, beban, tarif_perkwh);
    res.json({ message: "Tariff updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteTariff = async (req, res) => {
  const tariff_id = req.params.id;

  try {
    await dropTariff(tariff_id);
    res.json({ message: "Tariff deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};