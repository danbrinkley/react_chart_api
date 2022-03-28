import React from 'react'
import BarChart from './components/BarChart'
import ChartTable from './components/ChartTable'
import PieChart from './components/PieChart'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <BarChart />
      <ChartTable />
      <PieChart />
    </div>
  )
}

export default App