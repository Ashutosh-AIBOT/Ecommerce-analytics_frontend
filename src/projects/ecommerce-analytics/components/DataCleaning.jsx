import '../styles/project.css'

const steps = [
  { step: 'Raw Data Loaded',        value: '115,030 rows | 33 columns' },
  { step: 'Datetime Columns Fixed', value: '5 columns converted' },
  { step: 'Nulls Dropped',          value: 'Critical rows removed' },
  { step: 'Nulls Filled',           value: 'Median fill for 6 dimension columns' },
  { step: 'After Cleaning',         value: '115,011 rows | 0 nulls remaining' },
  { step: 'Features Engineered',    value: '44 columns total' },
  { step: 'New Features Added',     value: 'revenue, profit, margin, freight_ratio, cohort' },
]

function DataCleaning() {
  return (
    <div className="section-wrap">
      <h2 className="section-title">Data Cleaning</h2>
      <p className="section-desc">
        9 raw CSV tables merged into one master dataframe. All nulls handled. 15+ features engineered.
      </p>
      <table className="data-table">
        <thead>
          <tr><th>Step</th><th>Result</th></tr>
        </thead>
        <tbody>
          {steps.map((s) => (
            <tr key={s.step}>
              <td>{s.step}</td>
              <td>{s.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataCleaning