# 🚀 BFHL REST API – Chitkara Qualifier

A production-ready REST API developed as part of the **Chitkara University Qualifier Task**.
The project exposes mathematical and AI-powered operations via clean, secure, and well-structured HTTP endpoints.

The application is built using **Node.js + Express**, follows **clean architecture principles**, and is deployed publicly on **Vercel**.

---

## 📌 Features

* ✅ Clean REST API design
* ✅ Strict request validation
* ✅ Optimized mathematical operations
* ✅ External AI integration
* ✅ Centralized error handling
* ✅ Production-ready deployment
* ✅ Publicly accessible endpoints

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express
* **AI Integration:** Groq LLM (LLaMA 3.1)
* **Deployment:** Vercel
* **Version Control:** Git & GitHub

---

## 📂 Project Structure

```
bfhl-api/
│
├── src/
│   ├── app.js
│   ├── server.js
│   │
│   ├── routes/
│   │   ├── bfhl.routes.js
│   │   └── health.routes.js
│   │
│   ├── controllers/
│   │   ├── bfhl.controller.js
│   │   └── health.controller.js
│   │
│   ├── services/
│   │   ├── ai.service.js
│   │   └── math/
│   │       ├── fibonacci.service.js
│   │       ├── prime.service.js
│   │       ├── hcf.service.js
│   │       └── lcm.service.js
│   │
│   ├── validators/
│   │   └── bfhl.validator.js
│   │
│   ├── middlewares/
│   │   └── error.middleware.js
│   │
│   └── utils/
│       └── response.util.js
│
├── vercel.json
├── package.json
├── .gitignore
└── README.md
```

---

## 🌐 Live Deployment

**Base URL:**

```
https://bfhl-api-5sof.vercel.app
```

---

## 📡 API Endpoints

### ✅ Health Check

**Endpoint**

```
GET /health
```

**Description**
Checks API availability and returns official email.

**Response**

```json
{
  "is_success": true,
  "official_email": "your_chitkara_email@chitkara.edu.in"
}
```

---

### ✅ Main API

**Endpoint**

```
POST /bfhl
```

**Description**
Accepts exactly **one key** per request and performs the corresponding operation.

---

🔢 Supported Operations

1️⃣ Fibonacci Series

**Request**

```json
{
  "fibonacci": 7
}
```

**Response**

```json
{
  "is_success": true,
  "data": [0, 1, 1, 2, 3, 5, 8]
}
```

---

2️⃣ Prime Number Filter

**Request**

```json
{
  "prime": [2, 4, 7, 9, 11]
}
```

**Response**

```json
{
  "is_success": true,
  "data": [2, 7, 11]
}
```

---

3️⃣ Highest Common Factor (HCF)

**Request**

```json
{
  "hcf": [24, 36, 60]
}
```

**Response**

```json
{
  "is_success": true,
  "data": 12
}
```

---

4️⃣ Least Common Multiple (LCM)

**Request**

```json
{
  "lcm": [12, 18, 24]
}
```

**Response**

```json
{
  "is_success": true,
  "data": 72
}
```

---

5️⃣ AI-Powered Question Answering

**Request**

```json
{
  "AI": "What is the capital of India?"
}
```

**Response**

```json
{
  "is_success": true,
  "data": "Delhi"
}
```

> 🔹 The AI response is always **exactly one word**, as per requirements.

---

⚠️ Validation Rules

* Only **one key** allowed per request
* Invalid keys are rejected
* Empty or malformed requests return proper error responses
* Server never crashes on invalid input

---

🚀 Deployment (Vercel)

The application is deployed using **Vercel Serverless Functions**.

* Environment variables are configured in the Vercel dashboard
* `vercel.json` is used for build configuration
* APIs are publicly accessible

---

🔐 Environment Variables

```env
OFFICIAL_EMAIL=your_chitkara_email@chitkara.edu.in
GROQ_API_KEY=your_groq_api_key
PORT=3000
```

> ⚠️ `.env` file is excluded from GitHub using `.gitignore`.

---

🧪 Testing

* `GET /health` can be tested directly in the browser
* `POST /bfhl` can be tested using Postman or Thunder Client
* All edge cases and invalid inputs are handled gracefully

---

👤 Author

**Arihant Jain**
Chitkara University
📧 `your_chitkara_email@chitkara.edu.in`

---

📌 Notes

* This project follows **Clean Architecture**, **KISS**, and **DRY** principles
* Designed to be **scalable**, **maintainable**, and **production-ready**
* Built to meet and exceed the qualifier task requirements



