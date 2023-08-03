require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { findAll, createUser } = require('./service')

exports.showAll = async (req, res) => {
  try {
    const allUsers = await findAll()
    return res.json(allUsers)
  } catch (error) {
    console.log(error);
    return res.status(500).json();
  }
};

exports.register = async (req, res) => {
  try {
    const userData = req.body;
    const user = await createUser(userData);

    // Create a JWT and send it back to the client
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
    return res.json({ token });
  } catch (error) {
    console.log(error);

    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ message: "Account already exists" });
    }

    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.showMe = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Invalid token provided" });
    }
    console.log("auth req.user: ", req.user);
    const user = { ...req.user };

    if (!user) {
      return res.status(404).json("No User Found");
    }

    delete user.password;
    delete user.createdAt;

    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json();
  }
};
