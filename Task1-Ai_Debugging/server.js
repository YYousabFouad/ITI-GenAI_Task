const express = require("express");
const app = express();

// Bug 1: Missing middleware
app.post("/api/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) return res.status(400).send("Missing fields");

  res.status(201).json({ name, email });
});

// Bug 2: Wrong HTTP method
app.post("/api/users/:id", (req, res) => {
  res.json({
    id: req.params.id,
    name: "Ahmed",
  });
});

// Bug 3: Incorrect status code
app.delete("/api/users/:id", (req, res) => {
  res.status(200).json({
    message: "Created successfully",
  });
});

// Bug 4: Port issue
app.listen("three thousand", () => console.log("Running"));
