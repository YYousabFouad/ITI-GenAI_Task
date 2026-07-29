# Task 3 - AI Powered Code Review

## Objective

Refactor a legacy Express + MongoDB CRUD API using AI assistance.

---

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

---

## Installation

```bash
npm install
```

---

## Environment Variables

Create a `.env` file:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/task3DB
```

---

## Run

```bash
npm start
```

---

## API Endpoints

### GET Products

```
GET /products
```

---

### Create Product

```
POST /products
```

Body

```json
{
  "name": "Laptop",
  "price": 25000
}
```

---

## Project Structure

```
config/
controllers/
models/
routes/
server.js
```

---

## AI Usage

AI was used to:

- Review the legacy code
- Suggest improvements
- Refactor into MVC
- Improve error handling
- Replace callbacks with async/await
