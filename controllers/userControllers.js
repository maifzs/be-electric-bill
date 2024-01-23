// import express from "express";
import {
    getAllUser,
    createUser,
    editUser,
    dropUser,
} from "../services/userServices.js";

export const getUserList = async (req, res) => {
  const userList = await getAllUser();
  res.json({
    data: userList,
  });
};

export const postCreateUser = async (req, res) => {
  const { username, password, hak_akses } = req.body;
  await createUser(username, password, hak_akses);
  const resData = res.status(201).send(resData);
};

export const putUser = async (req, res) => {
  const user_id = req.params.id;
  const { username, password, hak_akses } = req.body;

  try {
    await editUser(user_id, username, password, hak_akses);
    res.json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteUser = async (req, res) => {
  const user_id = req.params.id;

  try {
    await dropUser(user_id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};