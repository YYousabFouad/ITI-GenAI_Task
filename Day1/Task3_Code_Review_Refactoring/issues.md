# Issues Identified Before Using AI

## Issue 1

The application does not follow the MVC architecture.
All business logic is written inside server.js, making the code difficult to maintain.

---

## Issue 2

Database operations use callback functions instead of async/await.
This reduces readability and makes error handling harder.

---

## Issue 3

There is no proper error handling.
Database errors may crash the application or return unclear responses.

---

## Issue 4

There is no input validation.
Users can send incomplete or invalid product data.

---

## Issue 5

The project structure is not organized.
Routes, controllers, and models are mixed together, reducing maintainability.
