require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { routes } = require("./routes/routes");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { errorMiddleware } = require("./middlewares/errorMiddleware");

const DB_URL = process.env.DB;

const PORT = process.env.PORT || 7001;

const app = express();

app.use(cookieParser());

app.use(function setCommonHeaders(req, res, next) {
  res.set("Access-Control-Allow-Private-Network", "true");
  next();
});

app.use(
  cors({
    credentials: true,
    origin: [process.env.CLIENT_URL, "https://hiksp.github.io"],
  })
);

app.use(express.json());
app.use(fileUpload());

app.get("/", (req, res) => {
  res.status(200).json("Welcome");
});
app.use(express.static("static"));
app.use(routes);
app.use(errorMiddleware);

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
