import '../styles/project.css'
import { useState } from 'react'

const models = [
  { name: 'Logistic Regression', accuracy: '96.96%', f1: '96.95%' },
  { name: 'Decision Tree',       accuracy: '96.96%', f1: '96.95%' },
  { name: 'Random Forest',       accuracy: '96.96%', f1: '96.95%', best: true },
]

function getSegment(r, f, m) {
  if (r >= 4 && f >= 4 && m >= 4) return { segment: 'Champions',  churn: 'Low Risk',    color: 'green'  }
  if (f >= 4 && m >= 3)           return { segment: 'Loyal',       churn: 'Low Risk',    color: 'green'  }
  if (r <= 2 && f >= 3)           return { segment: 'At Risk',     churn: 'Medium Risk', color: 'orange' }
  if (r <= 2)                     return { segment: 'Lost',        churn: 'High Risk',   color: 'red'    }
  return                                 { segment: 'Regular',     churn: 'High Risk',   color: 'red'    }
}

function MLModel() {
  const [form, setForm]     = useState({ r: '', f: '', m: '' })
  const [result, setResult] = useState(null)

  const predict = () => {
    const r = parseInt(form.r)
    const f = parseInt(form.f)
    const m = parseInt(form.m)
    if (!r || !f || !m) return
    setResult(getSegment(r, f, m))
  }

  return (
    <div className="section-wrap">
      <h2 className="section-title">ML Model — Churn Prediction</h2>
      <p className="section-desc">
        Trained on 93,335 customers. 90,535 identified as High Risk. Best model: Random Forest.
      </p>
      <table className="data-table">
        <thead>
          <tr><th>Model</th><th>Accuracy</th><th>F1 Score</th></tr>
        </thead>
        <tbody>
          {models.map((m) => (
            <tr key={m.name} className={m.best ? 'best-row' : ''}>
              <td>{m.name} {m.best && '⭐ Best'}</td>
              <td>{m.accuracy}</td>
              <td>{m.f1}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href="https://github.com/Ashutosh-AIBOT/ecommerce-analytics" target="_blank" className="github-link-btn">
        View ML Notebook on GitHub
      </a>
      <h3 className="sub-title">RFM Segment Predictor</h3>
      <p className="section-desc">
        Enter RFM scores (1–5) to see which segment a customer falls in.
      </p>
      <div className="predictor-form">
        <div className="pred-field">
          <label>Recency Score (1–5)</label>
          <input type="number" min="1" max="5" placeholder="e.g. 4"
            value={form.r} onChange={(e) => setForm({ ...form, r: e.target.value })} />
        </div>
        <div className="pred-field">
          <label>Frequency Score (1–5)</label>
          <input type="number" min="1" max="5" placeholder="e.g. 3"
            value={form.f} onChange={(e) => setForm({ ...form, f: e.target.value })} />
        </div>
        <div className="pred-field">
          <label>Monetary Score (1–5)</label>
          <input type="number" min="1" max="5" placeholder="e.g. 3"
            value={form.m} onChange={(e) => setForm({ ...form, m: e.target.value })} />
        </div>
        <button className="pred-btn" onClick={predict}>Predict Segment</button>
      </div>
      {result && (
        <div className="pred-result">
          <p>Segment → <span className={result.color}>{result.segment}</span></p>
          <p>Churn Risk → <span className={result.color}>{result.churn}</span></p>
        </div>
      )}
      <div className="coming-soon-btn">
        🤖 AI & ML Live Prediction System — Coming Soon
      </div>
    </div>
  )
}

export default MLModel