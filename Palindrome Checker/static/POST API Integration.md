📌 POST API Integration (Notes)

🔹 Endpoint

POST "/api/data"

🔹 Request Body

{
  "input": "your value"
}

🔹 Response

{
  "message": "Received",
  "data": {
    "input": "your value"
  }
}

🔹 Flow

Button click → fetch() → API → backend → response → DOM update

🔹 Key Learnings

- Frontend and Postman are separate clients
- Button request cannot be seen in Postman
- Use Network tab to inspect browser requests
- "express.json()" is required for "req.body"
- Always send JSON ("Content-Type: application/json")

🔹 Testing

- Browser → real app flow
- Postman → manual API testing