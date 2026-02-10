require('dotenv').config();
const express = require("express");
const healthRoutes = require("./routes/health.routes");
const bfhlRoutes = require("./routes/bfhl.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());

// ✅ ROUTES
app.use("/", healthRoutes);
app.use("/", bfhlRoutes);

// ✅ ERROR HANDLER LAST
app.use(errorMiddleware);

module.exports = app;

