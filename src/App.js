import React, { useEffect, useState } from 'react';
// import './App.css';

import styles from './App.module.css';
import Data from './components/Top/Data'
import State from './components/Drawer/State'
import Chart from './components/Chart/Chart'
import {fetchData} from './api/index'
const App = () => {
  const [data,setdata] = useState({})
  useEffect(()=>{
    getData()
    console.log(data)
  },[])
  const getData = async () =>{
    const res = await fetchData()
      setdata(res)
  }
  return (
    <div className={styles.container}>
      <Data data={data}/>
      <State />
      <Chart />
    </div>
  );
}

export default App;
