const express = require("express");
const { userRoutes } = require("./userRoutes");
const { postRoutes } = require("./postRoutes");
const { commentsRoutes } = require("./commentsRoutes");
const { contactRoutes } = require("./contactRoutes");

const routes = express.Router();

routes.use(userRoutes);
routes.use(postRoutes);
routes.use(commentsRoutes);
routes.use(contactRoutes);

exports.routes = routes;
