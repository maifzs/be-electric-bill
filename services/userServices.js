import User from "../models/user.js";

export const getAllUser = async () => {
  return await User.findAll();
};

export const createUser = async (username, password, hak_akses) => {
  try {
    await User.create({ username, password, hak_akses });
    return null;
  } catch (error) {
    console.error("Error creating new user:", error);
    throw error;
  }
};

export const editUser = async (user_id, username, password, hak_akses) => {
  try {
    const user = await User.findByPk(user_id);

    if (!user) {
      throw new Error("User not found");
    }

    await user.update({ username, password, hak_akses });
  } catch (error) {
    console.error("Error editing user:", error);
    throw error;
  }
};

export const dropUser = async (user_id) => {
  try {
    const user = await User.findByPk(user_id);

    if (!user) {
      throw new Error("User not found");
    }

    await user.destroy();
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};