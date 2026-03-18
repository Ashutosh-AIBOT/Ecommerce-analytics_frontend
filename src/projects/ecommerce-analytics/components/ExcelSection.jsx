import '../styles/project.css'

function ExcelSection() {
  return (
    <div className="section-wrap">
      <h2 className="section-title">Excel Analysis</h2>
      <p className="section-desc">
        Pivot tables and slicers built on top of all 9 tables.
        KPI summary sheet with key business metrics.
      </p>
      <div className="info-grid">
        <div className="info-card">
          <h3>Pivot Tables</h3>
          <p>Category vs Revenue, Monthly breakdown</p>
        </div>
        <div className="info-card">
          <h3>Slicers</h3>
          <p>Filter by date, state, category interactively</p>
        </div>
        <div className="info-card">
          <h3>KPI Sheet</h3>
          <p>Revenue R$16.1M, Profit R$5M, Margin 32.3%</p>
        </div>
        <div className="info-card">
          <h3>Charts</h3>
          <p>Bar, line, pie charts built inside Excel</p>
        </div>
      </div>
      <a href="https://github.com/Ashutosh-AIBOT/ecommerce-analytics" target="_blank" className="github-link-btn">
        View Excel Dashboard on GitHub
      </a>
    </div>
  )
}

export default ExcelSection