# Debugging Log

---

## Error 1

### Error

TypeError [ERR_SOCKET_BAD_PORT]

Port should be >= 0 and < 65536.

Received type string ('three thousand')

### Cause

The server port must be a numeric value.

### Fix

Replace

app.listen("three thousand")

with

app.listen(3000)

---

## Error 2

### Error

TypeError:

Cannot destructure property 'name' of 'req.body' as it is undefined.

### Cause

express.json() middleware was missing.

### Fix

Add

app.use(express.json());

before the routes.

---

## Error 3

### Error

GET /api/users/1

404 Not Found

### Cause

The endpoint was implemented using POST instead of GET.

### Fix

Replace

app.post()

with

app.get()

---

## Error 4

### Error

DELETE endpoint returned

Created successfully

### Cause

Incorrect response message.

### Fix

Replace

Created successfully

with

Deleted successfully
