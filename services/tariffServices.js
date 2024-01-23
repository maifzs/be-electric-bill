import Tariff from "../models/tariff.js";

export const getAllTariff = async () => {
  return await Tariff.findAll();
};

export const createTariff = async (kdtarif, beban, tarif_perkwh) => {
  try {
    await Tariff.create({ kdtarif, beban, tarif_perkwh });
    return null;
  } catch (error) {
    console.error("Error creating new tariff:", error);
    throw error;
  }
};

export const editTariff = async (tariff_id, kdtarif, beban, tarif_perkwh) => {
  try {
    const tariff = await Tariff.findByPk(tariff_id);

    if (!tariff) {
      throw new Error("Tariff not found");
    }

    await tariff.update({ kdtarif, beban, tarif_perkwh });
  } catch (error) {
    console.error("Error editing tariff:", error);
    throw error;
  }
};

export const dropTariff = async (tariff_id) => {
  try {
    const tariff = await Tariff.findByPk(tariff_id);

    if (!tariff) {
      throw new Error("Tariff not found");
    }

    await tariff.destroy();
  } catch (error) {
    console.error("Error deleting tariff:", error);
    throw error;
  }
};