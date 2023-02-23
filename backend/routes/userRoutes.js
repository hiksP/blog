const express = require("express");
const {
  registration,
  login,
  logout,
  activate,
  refresh,
  getMe,
  updateMe,
  updateAvatar,
} = require("../controllers/userController");
const { body } = require("express-validator");
const auth = require("../middlewares/auth");

const userRoutes = express.Router();

userRoutes.post(
  "/signup",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  body("name").isLength({ min: 2 }),
  registration
);

userRoutes.post("/signin", login);

userRoutes.post("/signout", logout);

userRoutes.get("/users/me", auth, getMe);

userRoutes.patch("/users/me", auth, updateMe);

userRoutes.patch(
  "/users/me/avatar",
  body("avatar").isURL(),
  auth,
  updateAvatar
);

userRoutes.get("/activate/:link", activate);

userRoutes.get("/refresh", refresh);

exports.userRoutes = userRoutes;
