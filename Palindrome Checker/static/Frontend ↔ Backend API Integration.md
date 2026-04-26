Full Debugging Documentation: Frontend ↔ Backend API Integration

📌 Overview

This document captures the complete debugging journey while connecting a frontend (browser) with a Node.js backend API using "fetch()".

It covers real-world issues encountered during development and their fixes.

---

🚨 Issues Faced & Solutions

1. SSL Protocol Error

Error:

net::ERR_SSL_PROTOCOL_ERROR

Cause:
Frontend was calling:

https://localhost:3000

But backend server was running on HTTP, not HTTPS.

Fix:
Use:

http://localhost:3000

---

2. CORS Error

Error:

Access to fetch has been blocked by CORS policy

Cause:
Frontend ("127.0.0.1:5500") and backend ("localhost:3000") are different origins.

Fix:
Install and enable CORS in backend:

npm install cors

import cors from "cors";
app.use(cors());

---

3. Connection Refused

Error:

net::ERR_CONNECTION_REFUSED

Cause:
Backend server was not running or wrong port was used.

Fix:

- Start server:

node server.js

- Ensure correct port:

app.listen(3000);

---

4. "DOCTYPE is not valid JSON"

Error:

Unexpected token '<'

Cause:
Frontend expected JSON but received HTML (usually a 404 page).

Reasons:

- Wrong API route
- Route not defined in backend
- Method mismatch (GET vs POST)

Fix:
Ensure correct route and response:

app.post("/api/data", (req, res) => {
  res.json({ message: "Working" });
});

---

5. Wrong API Path

Issue:
Backend route:

app.post("api/data") // ❌

Correct:

app.post("/api/data") // ✅

Cause:
Missing "/" caused route mismatch → HTML response → JSON error.

---

6. Promise Pending Issue

Observation in Console:

Promise { <pending> }

Cause:
"fetch()" is asynchronous and returns a Promise.

Fix:
Use "await" or ".then()":

const res = await fetch(url);
const data = await res.json();
console.log(data);

---

✅ Final Working Example

Backend (Node.js + Express)

import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/data", (req, res) => {
  res.json({ message: "Data received", body: req.body });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

---

Frontend (JavaScript)

async function callApi() {
  try {
    const res = await fetch("http://localhost:3000/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: "Krish" })
    });

    if (!res.ok) {
      throw new Error("Request failed");
    }

    const data = await res.json();
    console.log(data);

  } catch (err) {
    console.error(err);
  }
}

---

🧠 Key Learnings

- Always match protocol (http/https)
- Enable CORS for cross-origin requests
- Ensure server is running
- Match HTTP methods (GET/POST)
- Always define correct API routes
- Use "await" for async operations
- Debug responses using:

res.text()

---

🚀 Conclusion

This debugging journey covered:

- Network errors
- Server issues
- Routing problems
- Async handling

These are real-world full-stack development challenges, and understanding them builds strong backend + frontend integration skills.

---