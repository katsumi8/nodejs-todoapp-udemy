const express = require("express");
const app = express();

const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
app.use(express.json());
app.use(express.static("./public"));

const PORT = 5000;

app.use("/api/v1/tasks", taskRoute);

//dataベースと接続
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, console.log("server is built"));
  } catch (err) {
    console.log(err);
  }
};

start();
