const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

const productRoutes = require("./routes/productRoutes");

app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Task 3 Running Successfully");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
