# 🏗️ HLD — High Level Design
## Ecommerce Analytics — Frontend
> Stage 0 | Written before any code |

---

## What This Frontend Does

Single React Vite app that serves two purposes:
1. Portfolio — shows who Ashutosh is and what he built
2. Live churn prediction — form sends customer data to FastAPI, returns churn probability

---

## System Architecture
```mermaid
graph TD
    A[User Browser] --> B[React Vite App]
    B --> C[React Router v6]
    C --> D[Home Page - Static]
    C --> E[Dashboard Page - Dynamic]
    E --> F[Churn Prediction Form]
    F --> G[Axios POST]
    G --> H[FastAPI localhost:8000]
    H --> I[churn_model.pkl Random Forest]
    I --> J[Returns churn_probability + risk_label]
    J --> K[Result Card renders in UI]
```

---

## Pages

| Page | Route | Type | Data Source |
|---|---|---|---|
| Home | `/` | Static | No API call |
| Dashboard | `/dashboard` | Dynamic | FastAPI `/predict` |

---

## Home Page Flow
```mermaid
graph TD
    A[Navbar] --> B[Hero Section]
    B --> C[About Section]
    C --> D[Skills Section]
    D --> E[Projects Section]
    E --> F[Contact Section]
    F --> G[Footer]
```

---

## Dashboard Page Flow
```mermaid
graph TD
    A[Navbar] --> B[KPI Cards]
    B --> C[Charts Section]
    C --> D[SQL Showcase]
    D --> E[Churn Prediction Form]
    E --> F{User Submits}
    F --> G[Axios POST /predict]
    G --> H[FastAPI Returns JSON]
    H --> I[Result Card Shows Probability]
```

---

## Data Flow
```mermaid
sequenceDiagram
    User->>ChurnForm: Fills recency, frequency, monetary, avg_price
    ChurnForm->>FastAPI: POST /predict with form data
    FastAPI->>Model: Runs Random Forest
    Model->>FastAPI: Returns probability
    FastAPI->>ChurnForm: JSON { churn_probability, risk_label }
    ChurnForm->>User: Shows result card
```

---

## Tech Choices

| Tech | Why |
|---|---|
| React 18 | Component-based, reusable UI |
| Vite | Fast dev server, fast build |
| React Router v6 | Multi-page navigation |
| Axios | Clean API calls, easy error handling |
| TailwindCSS | No custom CSS, dark theme easy |

---

## External Connections

| Connection | Direction | Purpose |
|---|---|---|
| FastAPI `/predict` | Frontend → Backend | Churn prediction |
| FastAPI `/health` | Frontend → Backend | Check backend alive |

---

## What Is NOT In v0

- No auth
- No database
- No real-time data
- No animations
- No mobile optimization
- No deployment
- No tests

---

## Environment Variables Needed
```
VITE_API_URL=http://localhost:8000
```

---

## Related Design Docs

| File | What It Adds |
|---|---|
| [LLD_stage0.md](./LLD_stage0.md) | Every component name + what it does |
| [API_CONTRACTS.md](./API_CONTRACTS.md) | Exact request + response for /predict |
