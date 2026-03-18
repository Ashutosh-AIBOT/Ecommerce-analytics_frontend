# 🛒 Ecommerce Analytics — Frontend

> React Vite portfolio + live churn prediction UI for the Olist E-Commerce Analytics project.

![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-Latest-purple?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-cyan?style=flat-square&logo=tailwindcss)
![Status](https://img.shields.io/badge/Stage-v0_Skeleton-orange?style=flat-square)

---

## 📋 Table of Contents

- [What This Does](#-what-this-does)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Environment Variables](#-environment-variables)
- [Pages Overview](#-pages-overview)
- [Version Roadmap](#-version-roadmap)
- [Author](#-author)

---

## 🧠 What This Does

This is the React Vite frontend for the Olist E-Commerce Analytics project.

1. **Portfolio site** — showcases the full analytics project with real numbers
2. **Live churn prediction** — form connects to FastAPI backend, returns churn probability
3. **Dark theme** — built for a Data Analyst / ML Analyst portfolio (2026)

**Current Status:** `v0` — Folder structure set up. Routing live. No UI built yet.

---

## 🏗️ Architecture
```
Browser
  → React Router
      → Home Page     (Hero, About, Skills, Projects, Contact)
      → Dashboard     (KPIs, Charts, SQL showcase, Churn Prediction Form)
            ↓
      POST /predict
            ↓
      FastAPI Backend → Random Forest Model → Churn Probability
```

Full design → [HLD_stage0.md](./HLD_stage0.md)

---

## 🗂️ Project Structure

| File / Folder | What It Covers |
|---|---|
| [README.md](./README.md) | You are here |
| [HLD_stage0.md](./HLD_stage0.md) | Pages, components, data flow |
| [LLD_stage0.md](./LLD_stage0.md) | Every component name + what it does |
| [API_CONTRACTS.md](./API_CONTRACTS.md) | Endpoints this frontend calls |
| [RUNBOOK.md](./RUNBOOK.md) | Build + deploy steps |
| [SCALE_GUIDE.md](./SCALE_GUIDE.md) | CDN, lazy loading, bundle milestones |
| [SCALING_QUESTIONS.md](./SCALING_QUESTIONS.md) | Frontend scale questions |
| [VERSION_ROADMAP.md](./VERSION_ROADMAP.md) | v0 → v4 UI plan |
| [src/](./src/) | All React code lives here |

---

## ⚡ Quick Start

**Prerequisites:** Node 18+, npm, Git
```bash
# 1. Clone the repo
git clone https://github.com/Ashutosh-AIBOT/ecommerce-analytics.git
cd ecommerce-analytics/ecommerce-analytics_frontend

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Open .env and add your FastAPI backend URL

# 4. Start dev server
npm run dev

# 5. Open in browser
# http://localhost:5173
```

---

## 🔑 Environment Variables

| Variable | What It Is | Example |
|---|---|---|
| `VITE_API_URL` | FastAPI backend URL | `http://localhost:8000` |

---

## 📄 Pages Overview

| Page | Route | What It Shows |
|---|---|---|
| Home | `/` | Hero, About, Skills, Projects, Contact |
| Dashboard | `/dashboard` | KPIs, Charts, SQL showcase, Churn Prediction Form |

---

## 📌 Version Roadmap

| Version | What Gets Built |
|---|---|
| `v0` ← **you are here** | Folder structure. Routing set up. No UI yet. |
| `v1` | 🔜 Coming Soon |
| `v2` | 🔜 Coming Soon |
| `v3` | 🔜 Coming Soon |

Full breakdown → [VERSION_ROADMAP.md](./VERSION_ROADMAP.md)

---

## 🔗 Related Repos

| Part | GitHub |
|---|---|
| 📊 Backend + Data + ML | [ecommerce-analytics](https://github.com/Ashutosh-AIBOT/ecommerce-analytics) |
| 💻 Frontend (this repo) | [ecommerce-analytics_frontend](https://github.com/Ashutosh-AIBOT/ecommerce-analytics_frontend) |

---

## 👤 Author

**Ashutosh**
[GitHub](https://github.com/Ashutosh-AIBOT) · [LinkedIn](https://www.linkedin.com/in/ashutosh1975271/)

---

> *"First make it work. Then make it good."*
