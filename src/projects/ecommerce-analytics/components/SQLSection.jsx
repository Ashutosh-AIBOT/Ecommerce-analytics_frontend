import '../styles/project.css'

const queries = [
  {
    title: 'Top 10 Categories by Revenue',
    question: 'Which categories generate the most revenue?',
    sql: `SELECT product_category_name,
  ROUND(SUM(price + freight_value), 2) AS total_revenue,
  COUNT(DISTINCT order_id) AS total_orders
FROM order_items
JOIN products USING(product_id)
GROUP BY product_category_name
ORDER BY total_revenue DESC
LIMIT 10;`
  },
  {
    title: 'Monthly Revenue Trend',
    question: 'How is revenue trending month over month?',
    sql: `SELECT DATE_TRUNC('month', order_purchase_timestamp) AS month,
  ROUND(SUM(price + freight_value), 2) AS revenue,
  COUNT(DISTINCT order_id) AS orders
FROM orders
JOIN order_items USING(order_id)
GROUP BY month
ORDER BY month;`
  },
  {
    title: 'Customer Churn Rate by Segment',
    question: 'What percentage of each segment has churned?',
    sql: `SELECT segment,
  COUNT(*) AS customers,
  ROUND(AVG(churned) * 100, 2) AS churn_rate
FROM customer_segments
GROUP BY segment
ORDER BY churn_rate DESC;`
  },
]

function SQLSection() {
  return (
    <div className="section-wrap">
      <h2 className="section-title">SQL Analysis</h2>
      <p className="section-desc">60 questions solved across all 9 tables.</p>
      {queries.map((q) => (
        <div key={q.title} className="sql-card">
          <h3 className="sub-title">{q.title}</h3>
          <p className="section-desc">{q.question}</p>
          <pre className="sql-block">{q.sql}</pre>
        </div>
      ))}
    </div>
  )
}

export default SQLSection