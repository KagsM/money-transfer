import BalanceChart from './BalanceChart'
import './BalanceOverview.css'

const BalanceOverview = ({ balance = 6000 }) => {
  return (
    <div className="balance-overview-section">
      <BalanceChart />
    </div>
  )
}

export default BalanceOverview