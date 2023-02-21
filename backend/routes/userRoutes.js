const express = require("express");
const {
  registration,
  login,
  logout,
  activate,
  refresh,
} = require("../controllers/userController");

const userRoutes = express.Router();

userRoutes.post("/signup", registration);

userRoutes.post("/signin", login);

userRoutes.post("/signout", logout);

userRoutes.get("/activate/:link", activate);

userRoutes.get("/refresh", refresh);

exports.userRoutes = userRoutes;
