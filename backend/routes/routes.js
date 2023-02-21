const express = require("express");
const { userRoutes } = require("./userRoutes");
const { postRoutes } = require("./postRoutes");

const routes = express.Router();

routes.use(userRoutes);
routes.use(postRoutes);

exports.routes = routes;
