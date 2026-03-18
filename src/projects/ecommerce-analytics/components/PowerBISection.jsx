import '../styles/project.css'

function PowerBISection() {
  return (
    <div className="section-wrap">
      <h2 className="section-title">Power BI Dashboard</h2>
      <p className="section-desc">
        All 9 tables connected with proper relationships.
        Interactive KPI cards, slicers, bar and line charts.
        Filter by date, category, state, seller.
      </p>
      <div className="info-grid">
        <div className="info-card">
          <h3>9 Tables Connected</h3>
          <p>All relationships defined correctly</p>
        </div>
        <div className="info-card">
          <h3>KPI Cards</h3>
          <p>Revenue, Profit, Orders, Margin live</p>
        </div>
        <div className="info-card">
          <h3>Interactive Slicers</h3>
          <p>Filter by date, state, category, seller</p>
        </div>
        <div className="info-card">
          <h3>Charts</h3>
          <p>Bar, line, map visuals with drill-down</p>
        </div>
      </div>
      <a href="https://github.com/Ashutosh-AIBOT/ecommerce-analytics" target="_blank" className="github-link-btn">
        View Power BI Dashboard on GitHub
      </a>
    </div>
  )
}

export default PowerBISection