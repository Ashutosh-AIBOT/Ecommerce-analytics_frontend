import '../styles/project.css'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const monthly = [
  { month: 'Jan 17', revenue: 136634 },
  { month: 'Feb 17', revenue: 283420 },
  { month: 'Mar 17', revenue: 362614 },
  { month: 'Apr 17', revenue: 391067 },
  { month: 'May 17', revenue: 481509 },
  { month: 'Jun 17', revenue: 484343 },
  { month: 'Jul 17', revenue: 518906 },
  { month: 'Aug 17', revenue: 563683 },
  { month: 'Sep 17', revenue: 524636 },
  { month: 'Oct 17', revenue: 605512 },
  { month: 'Nov 17', revenue: 931060 },
  { month: 'Dec 17', revenue: 644862 },
  { month: 'Jan 18', revenue: 769944 },
  { month: 'Feb 18', revenue: 797233 },
  { month: 'Mar 18', revenue: 859707 },
  { month: 'Apr 18', revenue: 832339 },
  { month: 'May 18', revenue: 897278 },
  { month: 'Jun 18', revenue: 782686 },
  { month: 'Jul 18', revenue: 829838 },
  { month: 'Aug 18', revenue: 348985 },
]

const categories = [
  { name: 'beleza_saude',       revenue: 1456027 },
  { name: 'relogios_presentes', revenue: 1315014 },
  { name: 'cama_mesa_banho',    revenue: 1292422 },
  { name: 'esporte_lazer',      revenue: 1159638 },
  { name: 'informatica',        revenue: 1034068 },
  { name: 'moveis_decoracao',   revenue: 898975  },
  { name: 'utilidades_dom',     revenue: 822044  },
  { name: 'ferramentas_jardim', revenue: 811044  },
]

function ChartsSection() {
  return (
    <div className="section-wrap">
      <h2 className="section-title">Charts & Analysis</h2>
      <h3 className="sub-title">Monthly Revenue Trend (2017–2018)</h3>
      <p className="section-desc">
        Revenue grew from R$136K in Jan 2017 to R$897K in May 2018 — 6.5x growth in 18 months.
      </p>
      <div className="chart-box">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthly}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
            <XAxis dataKey="month" stroke="#a0a0a0" fontSize={11} />
            <YAxis stroke="#a0a0a0" fontSize={11} tickFormatter={(v) => `R$${(v/1000).toFixed(0)}K`} />
            <Tooltip formatter={(v) => `R$${v.toLocaleString()}`} contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }} />
            <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <h3 className="sub-title">Top 8 Categories by Revenue</h3>
      <p className="section-desc">
        beleza_saude leads with R$1,456,027. Top 3 categories = 23% of total revenue.
      </p>
      <div className="chart-box">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={categories} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
            <XAxis type="number" stroke="#a0a0a0" fontSize={11} tickFormatter={(v) => `R$${(v/1000).toFixed(0)}K`} />
            <YAxis type="category" dataKey="name" stroke="#a0a0a0" fontSize={10} width={140} />
            <Tooltip formatter={(v) => `R$${v.toLocaleString()}`} contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }} />
            <Bar dataKey="revenue" fill="#6366f1" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ChartsSection