import '../styles/project.css'

const insights = [
  {
    title: '📈 Focus on beleza_saude',
    detail: 'Top category with R$1,456,027 revenue and 8,646 orders. Increase inventory and marketing budget here first.'
  },
  {
    title: '🔁 Recover Lost Customers',
    detail: '45,822 lost customers hold R$7,777,151 in past revenue. Even 5% recovery = R$388,000 additional revenue.'
  },
  {
    title: '🗺️ Expand Beyond SP',
    detail: 'SP = 37.5% of revenue. RJ and MG are growing — targeted campaigns here can unlock R$2M+ additional revenue.'
  },
  {
    title: '⚠️ Churn is Critical',
    detail: '90,535 high risk customers. Deploy churn model to identify and retain before they leave permanently.'
  },
  {
    title: '💳 Credit Card Dominates',
    detail: 'Most payments via credit card with installments. Offer EMI discounts to increase average order value.'
  },
  {
    title: '🚚 Reduce Freight Ratio',
    detail: 'Freight ratio average 13–17%. Negotiate better logistics contracts to improve profit margin beyond 32.3%.'
  },
]

function Insights() {
  return (
    <div className="section-wrap">
      <h2 className="section-title">Business Insights</h2>
      <p className="section-desc">
        6 key recommendations based on real data analysis of 96,454 orders.
      </p>
      <div className="info-grid">
        {insights.map((i) => (
          <div key={i.title} className="info-card">
            <h3>{i.title}</h3>
            <p>{i.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Insights