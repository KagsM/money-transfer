import { useState } from 'react'
import BalanceOverview from './components/BalanceOverview'
import './App.css'

function App() {
  const [balance, setBalance] = useState(6000)

  return (
    <div className="app">
      <div className="app-header">
        <h1>Money Transfer App</h1>
      </div>
      <div className="app-content">
        <BalanceOverview balance={balance} />
      </div>
    </div>
  )
}

export default App
