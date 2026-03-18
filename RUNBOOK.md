# 📖 RUNBOOK
## Ecommerce Analytics — Frontend

---

## What Is This File

Step by step commands to run, build, and fix this frontend.
No guessing. Just follow the steps.

---

## Run Locally
```bash
# 1. Go to frontend folder
cd ecommerce-analytics_frontend

# 2. Install dependencies
npm install

# 3. Add environment variable
cp .env.example .env
# Open .env and set VITE_API_URL=http://localhost:8000

# 4. Start dev server
npm run dev

# 5. Open in browser
# http://localhost:5173
```

---

## Build for Production
```bash
# 1. Create production build
npm run build

# 2. Preview production build locally
npm run preview
```

Output goes to `dist/` folder.

---

## Environment Variables

| Variable | Value (dev) | Value (prod) |
|---|---|---|
| `VITE_API_URL` | `http://localhost:8000` | will be added after deployment |

---

## Common Problems

**Problem: npm run dev fails**
```bash
# Fix — reinstall node modules
rm -rf node_modules
npm install
npm run dev
```

**Problem: Churn form returns error**
```bash
# Fix — check if FastAPI backend is running
curl http://localhost:8000/health
# Should return { "status": "ok" }
```

**Problem: Blank page on load**
```bash
# Fix — check browser console for errors
# Most common cause — VITE_API_URL not set in .env
```

---

## Deploy (Coming Soon)
```
Platform  → Vercel or Netlify
Status    → will be added after deployment
```

---

## Related Docs

| File | What It Adds |
|---|---|
| [HLD_stage0.md](./HLD_stage0.md) | Full system architecture |
| [API_CONTRACTS.md](./API_CONTRACTS.md) | All API endpoints |
