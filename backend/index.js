require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { routes } = require("./routes/routes");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const DB_URL = process.env.DB;

const PORT = process.env.PORT || 7001;

const app = express();
app.use(cors());

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json("Welcome");
});
app.use(express.static("static"));
app.use(fileUpload());
app.use(routes);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`Server started on PORT ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();
