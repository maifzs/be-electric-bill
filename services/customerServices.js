import Customer from "../models/customer.js";

export const getAllCustomer = async () => {
  return await Customer.findAll();
};

export const createCustomer = async (nama_pelanggan, alamat) => {
  try {
    await Customer.create({ nama_pelanggan, alamat });
    return null;
  } catch (error) {
    console.error("Error creating new customer:", error);
    throw error;
  }
};

export const editCustomer = async (customer_id, nama_pelanggan, alamat) => {
  try {
    const customer = await Customer.findByPk(customer_id);

    if (!customer) {
      throw new Error("Customer not found");
    }

    await customer.update({ nama_pelanggan, alamat });
  } catch (error) {
    console.error("Error editing customer:", error);
    throw error;
  }
};

export const dropCustomer = async (customer_id) => {
  try {
    const customer = await Customer.findByPk(customer_id);

    if (!customer) {
      throw new Error("Customer not found");
    }

    await customer.destroy();
  } catch (error) {
    console.error("Error deleting customer:", error);
    throw error;
  }
};