const express = require("express");
const { userRoutes } = require("./userRoutes");
const { postRoutes } = require("./postRoutes");
const { commentsRoutes } = require("./commentsRoutes");

const routes = express.Router();

routes.use(userRoutes);
routes.use(postRoutes);
routes.use(commentsRoutes);

exports.routes = routes;
