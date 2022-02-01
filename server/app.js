const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const itemRoutes = require("./Route/item");

dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/item", itemRoutes);

app.use((err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const handleError = res.statusCode < 500;
  res.status(statusCode);
  res.json({
    message: handleError ? err.message : "someThis error",
  });
});

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`)
);
