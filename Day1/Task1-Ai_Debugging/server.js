const express = require("express");
const app = express();

/* ===========================================================
   BUG 1: Missing JSON Middleware
   -----------------------------------------------------------
   Problem:
   req.body is undefined because Express cannot parse JSON
   requests without express.json() middleware.
=========================================================== */

// ===== Original Code =====
// (No middleware was added)

// ===== Fix =====
app.use(express.json());

/* ===========================================================
   POST /api/users
=========================================================== */

app.post("/api/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).send("Missing fields");
  }

  res.status(201).json({
    name,
    email,
  });
});
/* ===========================================================
   BUG 2: Wrong HTTP Method
   -----------------------------------------------------------
   Problem:
   Retrieving a resource should use GET instead of POST.
=========================================================== */

// ===== Original Code =====
//
// app.post("/api/users/:id", (req, res) => {
//     res.json({
//         id: req.params.id,
//         name: "Ahmed"
//     });
// });

// ===== Fix =====

app.get("/api/users/:id", (req, res) => {
  res.status(200).json({
    id: req.params.id,
    name: "Ahmed",
  });
});

/* ===========================================================
   BUG 3: Incorrect DELETE Response
   -----------------------------------------------------------
   Problem:
   DELETE endpoint returned "Created successfully"
   which is misleading.
=========================================================== */

// ===== Original Code =====
//
// app.delete("/api/users/:id", (req, res) => {
//     res.status(200).json({
//         message: "Created successfully"
//     });
// });

// ===== Fix =====

app.delete("/api/users/:id", (req, res) => {
  res.status(200).json({
    message: "Deleted successfully",
  });
});
/* ===========================================================
   BUG 4: Invalid Port
   -----------------------------------------------------------
   Problem:
   app.listen() requires a numeric port.
=========================================================== */

// ===== Original Code =====
//
// app.listen("three thousand", () => {
//     console.log("Running");
// });

// ===== Fix =====

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
