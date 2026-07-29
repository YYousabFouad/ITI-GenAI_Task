# AI Responses

---

# Prompt 1 Response

The AI explained that middleware is a function executed between receiving an HTTP request and sending the HTTP response.

It receives three parameters:

- req
- res
- next

The AI explained that next() passes execution to the next middleware or route handler.

Common middleware use cases include:

- Logging
- Authentication
- Validation
- Error Handling

---

# Prompt 2 Response

The AI generated a practical logging middleware example.

Example:

```javascript
const logger = (req, res, next) => {
  console.log(req.method);
  console.log(req.url);
  next();
};
```

Then it explained each line individually:

- req contains request information.
- res represents the outgoing response.
- next() transfers control to the next middleware.
- console.log() records request information for debugging.

The explanation helped me understand how middleware is executed before the route handler.

---

# Prompt 3 Response

The AI acted as a Senior Node.js Developer.

It compared middleware to a security checkpoint at an airport.

Every request passes through security before reaching the destination.

The AI demonstrated an API Key Authentication middleware.

It also produced a table describing the middleware lifecycle.

The structured explanation made the middleware pattern much easier to understand.
