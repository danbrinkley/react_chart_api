import React from 'react'
import BarChart from './components/BarChart'
import ChartTable from './components/ChartTable'
import PieChart from './components/PieChart'
import Test from './components/Test'

const App = () => {
  return (
    <div>
      <BarChart />
      <ChartTable />
      <PieChart />
      <Test />
    </div>
  )
}

export default App