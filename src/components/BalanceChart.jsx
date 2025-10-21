import './BalanceChart.css'

const BalanceChart = () => {
  // Sample data points for the chart (Jan to Jun)
  const data = [
    { month: 'Jan', value: 4200 },
    { month: 'Feb', value: 3800 },
    { month: 'Mar', value: 4100 },
    { month: 'Apr', value: 4500 },
    { month: 'May', value: 4800 },
    { month: 'Jun', value: 5000 },
  ]

  const maxValue = 6000
  const chartWidth = 600
  const chartHeight = 200
  
  // Create path for the curve
  const createPath = () => {
    const points = data.map((item, index) => {
      const x = (index / (data.length - 1)) * chartWidth
      const y = chartHeight - (item.value / maxValue) * chartHeight
      return `${x},${y}`
    })
    
    return `M ${points.join(' L ')}`
  }

  // Create area path for the filled area under the curve
  const createAreaPath = () => {
    const points = data.map((item, index) => {
      const x = (index / (data.length - 1)) * chartWidth
      const y = chartHeight - (item.value / maxValue) * chartHeight
      return `${x},${y}`
    })
    
    return `M 0,${chartHeight} L ${points.join(' L ')} L ${chartWidth},${chartHeight} Z`
  }

  return (
    <div className="balance-chart">
      <div className="chart-header">
        <h2 className="chart-title">Balance Overview</h2>
        <div className="current-balance">6000</div>
      </div>
      <svg width={chartWidth} height={chartHeight + 40} viewBox={`0 0 ${chartWidth} ${chartHeight + 40}`}>
        {/* Grid lines */}
        <defs>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: '#4A90E2', stopOpacity: 0.3}} />
            <stop offset="100%" style={{stopColor: '#4A90E2', stopOpacity: 0.05}} />
          </linearGradient>
        </defs>
        
        {/* Y-axis grid lines */}
        {[0, 1500, 3000, 4500, 6000].map((value, index) => (
          <g key={value}>
            <line
              x1="0"
              y1={chartHeight - (value / maxValue) * chartHeight}
              x2={chartWidth}
              y2={chartHeight - (value / maxValue) * chartHeight}
              stroke="#f0f0f0"
              strokeWidth="1"
            />
            <text
              x="-10"
              y={chartHeight - (value / maxValue) * chartHeight + 4}
              fontSize="12"
              fill="#999"
              textAnchor="end"
            >
              {value}
            </text>
          </g>
        ))}
        
        {/* Area under the curve */}
        <path
          d={createAreaPath()}
          fill="url(#areaGradient)"
        />
        
        {/* Main curve line */}
        <path
          d={createPath()}
          stroke="#4A90E2"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Data points */}
        {data.map((item, index) => {
          const x = (index / (data.length - 1)) * chartWidth
          const y = chartHeight - (item.value / maxValue) * chartHeight
          return (
            <circle
              key={item.month}
              cx={x}
              cy={y}
              r="4"
              fill="#4A90E2"
              stroke="#fff"
              strokeWidth="2"
            />
          )
        })}
        
        {/* X-axis labels */}
        {data.map((item, index) => {
          const x = (index / (data.length - 1)) * chartWidth
          return (
            <text
              key={item.month}
              x={x}
              y={chartHeight + 20}
              fontSize="12"
              fill="#999"
              textAnchor="middle"
            >
              {item.month}
            </text>
          )
        })}
      </svg>
    </div>
  )
}

export default BalanceChart