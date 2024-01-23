// import express from "express";
import {
  getAllBilling,
  createBilling,
  editBilling,
  dropBilling,
} from "../services/billingServices.js";

export const getBillingList = async (req, res) => {
  const billingList = await getAllBilling();
  res.json({
    data: billingList,
  });
};

export const postCreateBilling = async (req, res) => {
  const { tahun_tagihan, bulan_tagihan, pemakaian } = req.body;
  await createBilling(tahun_tagihan, bulan_tagihan, pemakaian);
  const resData = res.status(201).send(resData);
};

export const putBilling = async (req, res) => {
  const billing_id = req.params.id;
  const { tahun_tagihan, bulan_tagihan, pemakaian } = req.body;

  try {
    await editBilling(billing_id, tahun_tagihan, bulan_tagihan, pemakaiantahun_tagihan, bulan_tagihan, pemakaian);
    res.json({ message: "Billing updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteBilling = async (req, res) => {
  const billing_id = req.params.id;

  try {
    await dropBilling(billing_id);
    res.json({ message: "Billing deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};