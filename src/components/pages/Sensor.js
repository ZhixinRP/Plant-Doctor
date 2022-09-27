import React, { useState , useEffect } from 'react';
import './Sensor.css'
import Axios from 'axios';

const url = 'http://49.245.27.185:8888/sensor/';

const Sensor = () => {
  const [data, setData] = useState({ humidity: '', temp: '', light: '', mousture: '', timeStamp: '' })

  const fetchData = async () => {
    try {
      const {data} = await Axios.get(url);
      // console.log(response)
      console.log(data.Humidity);
      setData({ humidity: data.Humidity, temp: data.Temperature, light: data.light, mousture: data.mousture, timeStamp: data.timeStemp})
      // console.log(message.text);
    } catch (error) {}
  };

  // async function fetchData() {
  //   await Axios.get('http://49.245.27.185:8888/sensor/').then((response) => {
  //     console.log(response.data.humidity);
  //     // setData(response)
  //   });
  // }

  useEffect(() => {
    fetchData();
  });
  return (
    <>
        <div>Sensor Data: {data}</div>
        <button onClick={fetchData}>Click to Refresh</button>
    </>
  )
}

export default Sensor