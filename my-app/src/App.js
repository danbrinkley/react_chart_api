import { useEffect, useState } from "react";
import BarChart from "./components/BarChart"
import {Chart as ChartJS,BarElement, CategoryScale, LinearScale} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale
);

export default function App() {


  const [chartData, setChartData] = useState();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
  setLoading(true);
  const fetchCoins = async () => {
    await fetch("https://api.coincap.io/v2/assets/?limit=5")
    .then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          console.log(json.data);
          setChartData(json.data)
        });
      }
    }).catch((error) => {
      console.log(error);
    });
};
fetchCoins()
    }, []);
    
    if (loading) {
      return <p> Data is loading...</p>
    }
 const barData = {

   labels: chartData?.data?.map(crypto => crypto.name),
   datasets: [
     {
       label: "Price in USD",
       data: chartData?.data?.map(crypto => crypto.priceUsd),
       backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  }  
    return (
      <div className="App">
      <div>
      {/* <Bar
        barData={barData}
        height={400}
        options={options}
      /> */}

      
    </div>
    </div>
  );
}
