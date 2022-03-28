import { useEffect, useState } from "react";
import {Chart as ChartJS,BarElement, CategoryScale, LinearScale} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale
);

const ChartTable = () => {

  const url = "https://api.coincap.io/v2/assets/?limit=5"
  const proxyUrl = "https://cors-anywhere.herokuapp.com/"
  const [chartData, setChartTable] = useState({});
  

  useEffect(() => {
  
  const fetchPrice = async () => {
    await fetch(`${proxyUrl}${url}`, {

      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        
      }
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((json) => {
            console.log(json.data);
            setChartTable(json.data)
          });
        }
      }).catch((error) => {
        console.log(error);
      });
  };


fetchPrice()
    }, [url, proxyUrl])
console.log(chartData) 
  
//  const barData = {

//    labels: chartData?.data?.map(crypto => crypto.name),
//    datasets: [
//      {
//        label: "Price in USD",
//        data: chartData?.data?.map(crypto => crypto.priceUsd),
//        backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)'
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)'
//       ],
//       borderWidth: 1
//     }]
//   };

//   const options = {
//     maintainAspectRatio: false,
//     scales: {
//     },
//     legend: {
//       labels: {
//         fontSize: 25,
//       },
//     },
//   }  
    return (
      <div className="App">
      <div>
        <ul>
          {chartData?.data?.map(c => (
            <li key="{c.id}"><p>{c.name}</p></li>
          ))}
        </ul>

      
    </div>
    </div>
  );
}

export default ChartTable