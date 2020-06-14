import React, {useState, useEffect} from 'react';
import {virusDailyData} from './api'
import { Line, Bar } from 'react-chartjs-2';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Chart = ({data: {confirmed, deaths, recovered}, country})  => {

  // data for global chart
    const [dailyData, setDailyData] = useState([])
    
    useEffect(() => {
        const fetchDailyData = async () => {
            setDailyData(await virusDailyData())
        }
        fetchDailyData()
    }, [])

    // two different charts
    const globalChart = (
       
        dailyData ? 
        (<Line 
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                  data:  dailyData.map(({ confirmed }) => confirmed),
                  label: 'Infected',
                  borderColor: '#f6a5c0',
                  backgroundColor: '#f6a5c0',
                  fill: true,
                }, {
                  data:  dailyData.map(({ deaths }) => deaths),
                  label: 'Deaths',
                  borderColor: '#c2185b',
                  backgroundColor: '#c2185b',
                  fill: true,
                }],
              }} />) : null
    )
  
    const barChart = (
      confirmed ?
      (
        <Bar data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [{
            label: 'People',
            backgroundColor: ['#f48fb1',
              '#f6a5c0',
              '#c3185d'], 
              data: [confirmed.value, recovered.value, deaths.value]
          }]
        }} 
  
        options={{
          legend: {display: false},
          title: {display: true, text: `Latest update for ${country}`}
        }} />
      )
     : null )
  
    return (
    <div css={{width: '80%'}} >{country ? barChart : globalChart}</div>
    )
}

export default Chart