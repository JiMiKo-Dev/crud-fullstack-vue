const db = require("../models/index");

const getAllUser = async (req, res) => {
  try {
    const users = await db.User.findAll(req.body);

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await db.User.findByPk(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: `User not found` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const created = await db.User.create(req.body);
    if (created) {
      res.status(201).json(created);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const updated = await db.User.update(req.body, {
      where: { id: req.params.id },
    });

    if (updated) {
      res.status(201).json(updated);
    } else {
      res.status(404).json({ error: `User not found` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deleted = await db.User.Destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(200).json(deleted);
    } else {
      res.status(404).json({ error: `User not found` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
