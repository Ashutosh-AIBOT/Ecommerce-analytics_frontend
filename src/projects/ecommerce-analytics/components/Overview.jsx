import '../styles/project.css'

const segments = [
  { name: 'Champions',     customers: 141,   revenue: '78,577',    clv: '2,174', churn: '0%' },
  { name: 'Loyal',         customers: 1408,  revenue: '427,886',   clv: '608',   churn: '0%' },
  { name: 'At Risk',       customers: 672,   revenue: '218,009',   clv: '696',   churn: '0%' },
  { name: 'Lost',          customers: 45822, revenue: '7,777,151', clv: '174',   churn: '98.74%' },
  { name: 'New Customers', customers: 45292, revenue: '7,608,869', clv: '168',   churn: '100%' },
]

const categories = [
  { name: 'beleza_saude',       revenue: '1,456,027', margin: '30.15%' },
  { name: 'relogios_presentes', revenue: '1,315,014', margin: '26.20%' },
  { name: 'cama_mesa_banho',    revenue: '1,292,422', margin: '33.28%' },
  { name: 'esporte_lazer',      revenue: '1,159,638', margin: '31.68%' },
]

function Overview() {
  return (
    <div className="section-wrap">
      <h2 className="section-title">Overview</h2>
      <h3 className="sub-title">RFM Customer Segments</h3>
      <table className="data-table">
        <thead>
          <tr>
            <th>Segment</th>
            <th>Customers</th>
            <th>Revenue (R$)</th>
            <th>Avg CLV</th>
            <th>Churn Rate</th>
          </tr>
        </thead>
        <tbody>
          {segments.map((s) => (
            <tr key={s.name}>
              <td>{s.name}</td>
              <td>{s.customers.toLocaleString()}</td>
              <td>{s.revenue}</td>
              <td>{s.clv}</td>
              <td className={s.churn === '0%' ? 'green' : 'red'}>{s.churn}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="sub-title">Top Categories by Revenue</h3>
      <table className="data-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Revenue (R$)</th>
            <th>Profit Margin</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((c) => (
            <tr key={c.name}>
              <td>{c.name}</td>
              <td>{c.revenue}</td>
              <td>{c.margin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Overview