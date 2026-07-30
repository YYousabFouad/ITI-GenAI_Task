# Task 1 - AI Prompts

---

## Prompt 1 (Zero-shot)

I have an Express.js application that contains several bugs.

Review the following code.

Identify every bug.

Explain why each bug happens.

Suggest the correct fix.

Code:

[paste server.js]

---

## Prompt 2 (Chain of Thought)

I have an Express.js REST API.

Analyze the code step by step.

For every endpoint:

1. Explain its purpose.
2. Check whether the HTTP method is correct.
3. Check if any middleware is missing.
4. Explain every bug.
5. Suggest the best fix.

Code:

[paste server.js]

---

## Prompt 3 (RTF)

Role:
You are a Senior Backend Node.js Engineer.

Task:
Review the following Express.js REST API.

Identify all bugs.

Explain the root cause.

Suggest the best fix.

Format:
Return your answer as a table with the following columns:

- Bug
- Cause
- Fix
- Severity

Code:

[paste server.js]
