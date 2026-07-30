# AI Responses

## Prompt 1 (Zero-shot)

The AI identified the following issues:

- Missing express.json() middleware.
- Incorrect HTTP method.
- Incorrect DELETE response message.
- Invalid port passed to app.listen().

The AI suggested the correct fixes for each issue.

---

## Prompt 2 (Chain of Thought)

The AI analyzed every endpoint individually.

It explained:

- Why req.body was undefined.
- Why GET should be used instead of POST.
- Why the DELETE response message was incorrect.
- Why app.listen() requires a numeric port.

The step-by-step explanation made debugging easier.

---

## Prompt 3 (RTF)

The AI returned a structured table containing:

- Bug description
- Root cause
- Suggested fix
- Severity

The response was well organized and easy to understand.
