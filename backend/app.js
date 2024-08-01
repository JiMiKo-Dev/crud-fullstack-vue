const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const userRoutes = require("./routes/user.route");

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
module.exports = app;
