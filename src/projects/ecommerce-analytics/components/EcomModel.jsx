import { useState } from 'react'

function EcomModel() {
  const [form, setForm] = useState({ recency: '', frequency: '', monetary: '' })
  const [result, setResult] = useState(null)

  const predict = () => {
    const r = Number(form.recency)
    const f = Number(form.frequency)
    const m = Number(form.monetary)
    let segment, risk, color
    if (r >= 4 && f >= 4 && m >= 4)   { segment = 'Champion'; risk = 'Low Risk';    color = '#22c55e' }
    else if (f >= 4 && m >= 3)         { segment = 'Loyal';    risk = 'Low Risk';    color = '#22c55e' }
    else if (r <= 2 && f >= 3)         { segment = 'At Risk';  risk = 'Medium Risk'; color = '#f59e0b' }
    else if (r <= 2)                   { segment = 'Lost';     risk = 'High Risk';   color = '#ef4444' }
    else                               { segment = 'Regular';  risk = 'High Risk';   color = '#ef4444' }
    setResult({ segment, risk, color })
  }

  return (
    <div style={{ maxWidth: 500, margin: '3rem auto', padding: '2rem' }}>
      <h2 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>RFM Customer Segmentation</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.9rem' }}>
        Enter RFM scores (1–5) to predict customer segment
      </p>
      {['recency', 'frequency', 'monetary'].map(field => (
        <div key={field} style={{ marginBottom: '1.2rem' }}>
          <label style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'capitalize' }}>
            {field} (1–5)
          </label>
          <input type="number" min="1" max="5" value={form[field]}
            onChange={e => setForm({ ...form, [field]: e.target.value })}
            style={{ display: 'block', width: '100%', marginTop: '0.4rem',
              background: 'var(--bg-secondary)', border: '1px solid var(--border)',
              borderRadius: 8, padding: '0.7rem 1rem', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none' }}
          />
        </div>
      ))}
      <button onClick={predict} style={{ width: '100%', background: 'var(--accent)', color: 'white',
        border: 'none', borderRadius: 8, padding: '0.9rem', fontSize: '1rem', cursor: 'pointer' }}>
        Predict Segment
      </button>
      {result && (
        <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--bg-card)',
          border: `1px solid ${result.color}`, borderRadius: 12, textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
            {result.risk === 'Low Risk' ? '✅' : result.risk === 'Medium Risk' ? '⚠️' : '🚨'}
          </div>
          <div style={{ fontSize: '1.4rem', fontWeight: 700, color: result.color }}>{result.segment}</div>
          <div style={{ color: result.color, marginTop: '0.3rem' }}>{result.risk}</div>
        </div>
      )}
    </div>
  )
}
export default EcomModel