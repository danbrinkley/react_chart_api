import React, { useState, useEffect } from 'react'
import {Chart as ChartJS,BarElement, CategoryScale, LinearScale} from 'chart.js';
import './styles.css'
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale
);


const BarChart = () => {
  const [barChart, setBarChart] = useState({})
  const apiUrl = "https://api.coinranking.com/v2/coins/?limit=8";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiKey = "coinrankinga0ceefd513dd1a624e417b344fe709aa19ae1907bfb5ac6d";


  useEffect(() => {
    const fetchCoins = async () => {
      await fetch(`${proxyUrl}${apiUrl}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': `${apiKey}`,
          'Access-Control-Allow-Origin': "*"
        }
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              console.log(json.data);
              setBarChart(json.data)
            });
          }
        }).catch((error) => {
          console.log(error);
        });
    };
    fetchCoins()
  }, [apiUrl, proxyUrl, apiKey])

  console.log("chart", barChart);
  
  const data = {
    labels: barChart?.coins?.map(x => x.name),
    datasets: [{
      label: `${barChart?.coins?.length} Coins Available`,
      data: barChart?.coins?.map(x => x.change),
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
  
  
  return (
    <div className="barchart_ctr">
         <h3>Cryptocurrency Price Change</h3>
       <Bar
        data={data}
        height={300}
        
      /> 

    </div>
  )
}

export default BarChart







