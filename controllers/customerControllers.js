// import express from "express";
import {
  getAllCustomer,
  createCustomer,
  editCustomer,
  dropCustomer,
} from "../services/customerServices.js";

export const getCustomerList = async (req, res) => {
  const customerList = await getAllCustomer();
  res.json({
    data: customerList,
  });
};

export const postCreateCustomer = async (req, res) => {
  const { nama_pelanggan, alamat } = req.body;
  await createCustomer(nama_pelanggan, alamat);
  const resData = res.status(201).send(resData);
};

export const putCustomer = async (req, res) => {
  const customer_id = req.params.id;
  const { nama_pelanggan, alamat } = req.body;

  try {
    await editCustomer(customer_id, nama_pelanggan, alamat);
    res.json({ message: "Customer updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteCustomer = async (req, res) => {
  const customer_id = req.params.id;

  try {
    await dropCustomer(customer_id);
    res.json({ message: "Customer deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};