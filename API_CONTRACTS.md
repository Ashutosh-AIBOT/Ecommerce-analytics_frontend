# 📡 API Contracts
## Ecommerce Analytics — Frontend
> Stage 0 | Agreed between frontend and backend before any code

---

## Base URL
```
Development  → http://localhost:8000
Production   → TBD
```

---

## Endpoints

---

### 1. Health Check
```
GET /health
```

**Purpose:** Check if backend is alive before making any API call

**Request Body:** None

**Response — Success:**
```json
{
  "status": "ok",
  "model": "loaded"
}
```

**Response — Failure:**
```json
{
  "status": "error",
  "message": "model not loaded"
}
```

**Status Codes:**
| Code | Meaning |
|---|---|
| 200 | Backend alive, model loaded |
| 500 | Backend error |

---

### 2. Churn Prediction
```
POST /predict
```

**Purpose:** Send customer data → get churn probability + risk label

**Request Body:**
```json
{
  "recency": 120,
  "frequency": 1,
  "monetary": 150.50,
  "avg_price": 75.25
}
```

**Request Fields:**
| Field | Type | What It Is |
|---|---|---|
| `recency` | integer | Days since last order |
| `frequency` | integer | Total number of orders |
| `monetary` | float | Total amount spent (R$) |
| `avg_price` | float | Average price per order (R$) |

**Response — Success:**
```json
{
  "churn_probability": 0.87,
  "risk_label": "High"
}
```

**Response Fields:**
| Field | Type | What It Is |
|---|---|---|
| `churn_probability` | float | 0.0 to 1.0 |
| `risk_label` | string | High / Medium / Low |

**Risk Label Logic:**
| Probability | Label |
|---|---|
| 0.70 → 1.00 | High |
| 0.40 → 0.69 | Medium |
| 0.00 → 0.39 | Low |

**Response — Validation Error:**
```json
{
  "error": "validation_error",
  "message": "recency must be a positive integer"
}
```

**Response — Server Error:**
```json
{
  "error": "server_error",
  "message": "model prediction failed"
}
```

**Status Codes:**
| Code | Meaning |
|---|---|
| 200 | Prediction successful |
| 422 | Invalid input data |
| 500 | Server or model error |

---

## What Frontend Sends

File → `src/api/predict.js`
```
predictChurn(formData)
  → POST /predict
  → { recency, frequency, monetary, avg_price }
  → returns { churn_probability, risk_label }
```

---

## What Is NOT In v0

- No auth headers
- No API keys
- No pagination
- No bulk prediction

---

## Related Docs

| File | What It Adds |
|---|---|
| [HLD_stage0.md](./HLD_stage0.md) | Full system architecture |
| [LLD_stage0.md](./LLD_stage0.md) | Which component calls which endpoint |
