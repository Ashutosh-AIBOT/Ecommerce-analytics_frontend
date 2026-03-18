import '../styles/project.css'

function ProjectBanner() {
  return (
    <div className="project-banner">
      <span className="banner-tag">Project 1 — Data Analytics + ML</span>
      <h1 className="banner-title">Ecommerce Sales & Customer Analytics</h1>
      <p className="banner-sub">
        End-to-end analysis on 96,454 real orders from Olist Brazilian E-Commerce dataset.
      </p>
      <div className="banner-stats">
        <div className="bstat">
          <span>R$16,110,492</span>
          <p>Total Revenue</p>
        </div>
        <div className="bstat">
          <span>96,454</span>
          <p>Orders</p>
        </div>
        <div className="bstat">
          <span>93,335</span>
          <p>Customers</p>
        </div>
        <div className="bstat">
          <span>32.3%</span>
          <p>Profit Margin</p>
        </div>
      </div>
      <a href="https://github.com/Ashutosh-AIBOT/ecommerce-analytics" target="_blank" className="banner-btn">
        View on GitHub
      </a>
    </div>
  )
}

export default ProjectBanner