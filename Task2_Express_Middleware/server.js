const express = require("express");
const app = express();

app.use(express.json());

/* ==========================================================
   Middleware 1: Request Logger

   Purpose:
   Logs every incoming request with its method, URL,
   and request time.
========================================================== */

const loggerMiddleware = (req, res, next) => {
  console.log("========== New Request ==========");
  console.log(`Method : ${req.method}`);
  console.log(`URL    : ${req.originalUrl}`);
  console.log(`Time   : ${new Date().toLocaleString()}`);
  console.log("===============================");

  next();
};

/* ==========================================================
   Apply Logger Globally
========================================================== */

app.use(loggerMiddleware);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
