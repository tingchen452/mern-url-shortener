const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const urlRoute = require("./routes/urlRoute");
const emailRoute = require("./routes/emailRoute");
const app = express();
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    app.listen(process.env.PORT, console.log("Database and Server connected"))
  );

app.use(express.json());
app.use(cors());

//routers

app.use("/", urlRoute);
app.use("/email", emailRoute);
