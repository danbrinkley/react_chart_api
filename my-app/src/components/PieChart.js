import React, { useState, useEffect } from 'react'

import { Pie } from 'react-chartjs-2';

import chart from 'chart.js/auto'
import './styles.css'



const PieChart = () => {
  const [pieChart, setPieChart] = useState({})
  const apiUrl = "https://api.coinranking.com/v2/coins/?limit=5";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiKey = "coinrankinga0ceefd513dd1a624e417b344fe709aa19ae1907bfb5ac6d";


  useEffect(() => {
    const fetchCoins = async () => {
      await fetch(`${proxyUrl}${apiUrl}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': `${apiKey}`,
          'Access-Control-Allow-Origin': "*",
        }
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              console.log(json.data);
              setPieChart(json.data)
            });
          }
        }).catch((error) => {
          console.log(error);
        });
    };
    fetchCoins()
  }, [apiUrl, proxyUrl, apiKey])

  console.log("chart", pieChart);
  
  const data = {
    labels: pieChart?.coins?.map(x => x.name),
    datasets: [{
      label: `${pieChart?.coins?.length} Coins Available`,
      data: pieChart?.coins?.map(x => x.marketCap),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
    }]
  };
  
  
  return (
    <div className="pie_ctr">
      <h3>Cryptocurrency Market Cap</h3>
       <Pie
        data={data}
        
      /> 

    </div>
  )
}

export default PieChart