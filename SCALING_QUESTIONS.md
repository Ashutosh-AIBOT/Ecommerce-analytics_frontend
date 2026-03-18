# ❓ Scaling Questions — Ask Before Every Feature

> These 20 questions take 2 minutes. They save 2 weeks of debugging.


## Ecommerce Analytics — Frontend

---

## What Is This File

Before adding any new feature to this frontend,
ask these questions first.
2 minutes of questions saves 2 weeks of fixing.

---

## Questions To Ask Before Every Feature

### Performance
- Will this component re-render too many times?
- Am I loading data I do not need?
- Should this page be lazy loaded?
- Am I importing a heavy library for one small thing?

### API Calls
- Am I calling the API inside a loop?
- Do I need to debounce this input before calling API?
- What happens if the API is slow — does UI freeze?
- What happens if the API is down — does user see blank screen?

### Bundle Size
- Does this new package add more than 50KB to bundle?
- Is there a lighter alternative?
- Can I write this myself in 10 lines instead of importing a library?

### User Experience
- What does the user see while data is loading?
- What does the user see if API call fails?
- What does the user see on mobile screen?

### State Management
- Can this stay as local useState?
- Am I passing props more than 3 levels deep?

---

## Questions To Ask At Each Scale

### v0 → v1 (first deploy)
- Is the bundle under 500KB?
- Are all images compressed?
- Does the churn form work on deployed URL?
- Is VITE_API_URL set correctly for production?

### v1 → v2 (growing traffic)
- Are pages lazy loaded?
- Are images in WebP format?
- Is there a loading state on every API call?
- Is there an error state on every API call?

### v2 → v3 (serious traffic)
- Are static assets cached properly?
- Is CDN configured?
- Is bundle under 200KB?

---

## Related Docs

| File | What It Adds |
|---|---|
| [SCALE_GUIDE.md](./SCALE_GUIDE.md) | What to change at each scale stage |
| [VERSION_ROADMAP.md](./VERSION_ROADMAP.md) | Full v0 to v4 plan |


------


## The 20 Questions

| # | Question | If YES |
|---|---|---|
| 1 | **Big O First** — What is time and space complexity? | Avoid O(n²) in any hot path |
| 2 | **DB Inside Loop?** — Am I calling DB inside a loop? | Always batch queries |
| 3 | **Cache This?** — Read often, changes rarely? | Cache in Redis |
| 4 | **Should Be Async?** — Will this block a thread waiting? | Push to Kafka or use async/await |
| 5 | **Failure Fallback?** — What if this external call fails? | Add fallback + retry logic |
| 6 | **Over-fetching?** — Am I loading more data than needed? | Add LIMIT, pagination, projections |
| 7 | **Connection Pool?** — Is DB/HTTP client using a pool? | Never create new connection per request |
| 8 | **Input Validated?** — Is ALL user input validated and sanitized? | Safe from injection attacks |
| 9 | **Secrets Safe?** — API keys and passwords in env vars, not code? | Use .env, never hardcode |
| 10 | **Timeout Set?** — Every external call has explicit timeout? | No infinite waits |
| 11 | **Works at 1B Rows?** — Will this SQL still be fast at 1 billion rows? | Add indexes, rethink query |
| 12 | **Enough Logging?** — Can I debug a prod issue from these logs alone? | Add structured logging |
| 13 | **Idempotent?** — If this runs twice, same result? | Payments, emails must be idempotent |
| 14 | **Circuit Breaker?** — If downstream is slow, does it cascade? | Add circuit breaker pattern |
| 15 | **Index Exists?** — Index on every WHERE, JOIN, ORDER BY column? | Add missing indexes |
| 16 | **Feature Flagged?** — Should this be behind a flag for gradual rollout? | Use feature flags |
| 17 | **Backward Compatible?** — Does this break existing clients or services? | Version your API |
| 18 | **Tested at Load?** — Did I run a k6 load test to find breaking point? | Test before launch |
| 19 | **Pagination Added?** — Every list endpoint has page + limit? | Never return unbounded results |
| 20 | **Health Check Updated?** — Does /health reflect this new dependency? | Update health endpoint |

---

## Feature Decision Tree
```
QUESTION 1: Does user need to WAIT for result?
├── YES → Sync API
└── NO  → Async + Queue

QUESTION 2: Will same data be requested repeatedly?
├── YES → Add Redis cache
└── NO  → Go direct to DB

QUESTION 3: Is data static (images, CSS, video)?
├── YES → Put on CDN
└── NO  → Serve from server

QUESTION 4: What database?
├── Need transactions? → PostgreSQL
├── Need search? → Elasticsearch
├── Need massive writes? → Cassandra
├── Need caching? → Redis
└── Starting out? → PostgreSQL for everything

QUESTION 5: What queue?
├── Simple tasks? → Celery + Redis
├── Complex routing? → RabbitMQ
└── Millions of events? → Kafka

QUESTION 6: Web server?
├── Just starting? → Nginx
├── Using K8s? → Traefik
└── Want simple HTTPS? → Caddy
```

---

## Pre-Coding Checklist (Before Every Feature)

- [ ] HLD updated for this feature
- [ ] Schema change written as migration file
- [ ] API contract agreed with frontend
- [ ] ADR written if a major tech decision was made
- [ ] All 20 questions above answered
- [ ] Feature flag added if needed
- [ ] Load test planned for staging

