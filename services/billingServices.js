import Billing from "../models/billing.js";

export const getAllBilling = async () => {
  return await Billing.findAll();
};

export const createBilling = async (tahun_tagihan, bulan_tagihan, pemakaian) => {
  try {
    await Billing.create({ tahun_tagihan, bulan_tagihan, pemakaian });
    return null;
  } catch (error) {
    console.error("Error creating new billing:", error);
    throw error;
  }
};

export const editBilling = async (
  billing_id,
  tahun_tagihan,
  bulan_tagihan,
  pemakaian
) => {
  try {
    const billing = await Billing.findByPk(billing_id);

    if (!billing) {
      throw new Error("Billing not found");
    }

    await billing.update({ tahun_tagihan, bulan_tagihan, pemakaian });
  } catch (error) {
    console.error("Error editing billing:", error);
    throw error;
  }
};

export const dropBilling = async (billing_id) => {
  try {
    const billing = await Billing.findByPk(billing_id);

    if (!billing) {
      throw new Error("Billing not found");
    }

    await billing.destroy();
  } catch (error) {
    console.error("Error deleting billing:", error);
    throw error;
  }
};