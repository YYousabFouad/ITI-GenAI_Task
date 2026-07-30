# Task 2 - Prompt Driven Express Middleware

## Description

This project demonstrates how custom Express middleware can be implemented after learning the concepts through Generative AI prompts.

---

## Technologies

- Node.js
- Express.js
- Git
- ChatGPT

---

## Middleware Implemented

- Request Logger
- API Key Authentication
- Input Validation

---

## Prompt Engineering Techniques

- Zero-shot Prompting
- Improved Prompt
- Role-Task-Format (RTF)

---

## API Endpoint

POST /api/users

---

## Required Header

```
x-api-key: ITI2026
```

---

## Required JSON Body

```json
{
  "name": "Ahmed",
  "email": "ahmed@test.com"
}
```

---

## Run Project

```bash
npm install
node server.js
```

---

## Features

- Logs every request
- Authenticates API keys
- Validates request body
- Returns appropriate HTTP status codes
