import React, { useState , useEffect } from 'react';
import './Sensor.css'
import Axios from 'axios';

const url = 'http://49.245.27.185:8888/sensor/';

const Sensor = () => {
  const [data, setData] = useState({ humidity: '', temp: '', light: '', moisture: '', timeStamp: '' })

  const fetchData = async () => {
    try {
      const {data} = await Axios.get(url);
      setData({ humidity: data.Humidity, temp: data.Temperature, light: data.light, moisture: data.mousture, timeStamp: data.timeStemp})
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  },[]);
  return (
    <>
      <div className="container">
        <div className="sensor-container">
          <h1>Sensor Data</h1>
          <div><b>Himidity:</b> {data.humidity}</div>
          <div><b>Temperature:</b>  {data.temp}</div>
          <div><b>Light:</b>  {data.light}</div>
          <div><b>Moisture:</b>  {data.moisture}</div>
          <div><b>Time Stamp:</b>  {data.timeStamp}</div>
          <form className='refreshForm'>
            <button className='btnRefresh'>Click to Refresh</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Sensor