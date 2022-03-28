import React, { useState, useEffect } from 'react'
import './styles.css'

const ChartTable = () => {
  const [tableChart, setTableChart] = useState({})
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
          'Access-Control-Allow-Origin': "*"
        }
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              console.log(json.data);
              setTableChart(json.data)
            });
          }
        }).catch((error) => {
          console.log(error);
        });
    };
    fetchCoins()
  }, [apiUrl, proxyUrl, apiKey])

  console.log("chart", tableChart);


  return (
    <div className="table_ctr">

  <h3>Top 10 Cryptocurrency Prices</h3>
<table>
  <thead>
    <tr>
      <th>Rank</th>
      <th>Name</th>
      <th>Price</th>
      <th>Market Cap</th>
      </tr>
      </thead>
      {tableChart?.coins?.map((c) => (
      <tbody>
        <tr key={c.id}>
        
          <td><p>{c.rank}</p></td>
          <td ><p>{c.name}</p></td>
          <td><p>{c.price}</p></td>
          <td><p>{c.marketCap}</p></td>
            </tr>
            </tbody>
        ))}
        </table>
      
    </div>
  )
}

export default ChartTable