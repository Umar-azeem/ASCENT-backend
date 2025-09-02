const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const productRoutes = require("../routes/productRoutes");

dotenv.config();

const app = express();

// ✅ CORS config
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://product-dashboard-two-eta.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(bodyParser.json());

// ✅ Routes
app.use("/api/products", productRoutes);

// ✅ MongoDB connection (only once)
if (!mongoose.connection.readyState) {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
}

// ✅ Vercel requires: export handler instead of app.listen
module.exports = app;
