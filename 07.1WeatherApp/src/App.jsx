/* eslint-disable no-unused-vars */
// import { useState } from 'react'

import './App.css'
import useWeatherInfo from './hooks/useWeatherInfo'
import { Searchbar } from './components/Searchbar';
import { Card } from './components/Card';
import { useEffect, useState } from 'react';


function App() {

  let [temp, setTemp] = useState(0);
  let [maxTemp, setMaxTemp] = useState(0);
  let [minTemp, setMinTemp] = useState(0);
  let [city, setcity] = useState("Pune");
  let [Weekday, setWeekday] = useState("Sunday");
  let [day, setDay] = useState(0);
  let [month, setMonth] = useState("June");
  let [year, setYear] = useState(1000);
  let [wind, setWind] = useState(0);
  let [humidity, setHumidity] = useState(0);
  let [visibility, setVisibility] = useState(0); 
  let [status, setStatus] = useState(""); 
  let [icon, setIcon] = useState(''); 


  let res = useWeatherInfo(city);


  console.log(res);

  useEffect(() => {
    update(res);
  }, [res]);

  function update(res){
    if (res.name) {
      const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const date = new Date();
      const arr = date.toString().split(" ");
      const temp = (res.main.temp - 273.15).toFixed(1);
      const minTemp = (res.main.temp_min -273).toFixed(1);
      const maxTemp = (res.main.temp_max -273).toFixed(1);
  
      setTemp(temp);
      setMaxTemp(maxTemp);
      setMinTemp(minTemp);
      setMonth(arr[1]);
      setDay(arr[2]);
      setYear(arr[3]);
      setWeekday(weekday[date.getDay()]);
      setWind(res.wind.speed);
      setVisibility(res.visibility / 1000);
      setHumidity(res.main.humidity);
      setStatus(res.weather[0].description);
      setIcon(res.weather[0].icon);
    }
  }


  return (
    <>
    <Searchbar onCityChange={ (CityVal) => {setcity(CityVal)}}></Searchbar>
    <Card icon={icon} city={res.name} day={Weekday} date={day} month={month} year={year} temp={temp} maxTemp={maxTemp} minTemp={minTemp} wind={wind} visibility={visibility} humidity={humidity} status={status}></Card>
    </>
  )
}

export default App
