import React,{useEffect,useState} from 'react';
import {dailydata} from '../../api/index';
import {Line,Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = () => {
  const [daily,setdaily] = useState([]);

  useEffect(()=>{
    const getdata = async () =>{
      setdaily(await dailydata()); 
    }
    getdata()

  },[])
  console.log(daily)

  const lineChart = (
    daily.length ? (
    <Line
      data={{
        labels:daily.map(({ reportDate }) => reportDate),
        datasets:[{
          data: daily.map((data) => data.confirmed.total),
          label:'Infected',
          borderColor:'#3333ff',
          fill:true
        },{
          data: daily.map((data) => data.deaths.total),
          label:'Deaths',
          borderColor:'red',
          backgroundColor:'rgba(255,0,0,0.5)',
          fill:true
        }]
      }}
    />
    ):null
  );

  return (
    <div className="Chart">
      <div className={styles.container}>
        {lineChart}
      </div>
    </div>
  );
}

export default Chart;