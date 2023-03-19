const express = require("express");
const { contactMe } = require("../controllers/contactController");

const contactRoutes = express.Router();

contactRoutes.post("/contact", contactMe);

exports.contactRoutes = contactRoutes;
