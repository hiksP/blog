const express = require("express");
const mongoose = require("mongoose");
const { routes } = require("./routes/routes");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const DB_URL =
  "mongodb+srv://hiksvalp:3hQ-DnT-bqL-L4N@cluster0.kmme2gv.mongodb.net/?retryWrites=true&w=majority";

const PORT = 5000;

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("Hel");
});
app.use(express.static("static"));
app.use(fileUpload());
app.use(routes);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log("Server started");
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();
