// adding variables to use express
// adding variables to use mongoose to connect to mongodb
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// adding configs to use .env file for secret credentials
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// adding cors library to disable or enable cors
app.use(cors());
app.use(express.json());

// future credentials to connect to mongodb
const uri = process.env.ATLAS_URI;

// connection to mongodb
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// inital route to get all the book inventory
const inventoryRouter = require("./routes/inventory");
// add future routes here

app.use("/inventroy", inventoryRouter);

// staring node.js server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
