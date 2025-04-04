import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState } from 'react'
import WeatherBox from './component/WeatherBox.jsx';
import WeatherButton from './component/WeatherButton.jsx';

function App() {

  const[weather,setWeather]=useState(null);
  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat,lon);
      console.log("현재 위치 : ",lat,lon)
    });
  };
  const getWeatherByCurrentLocation = async(lat,lon) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7e23dd278af75d56e9aaf95a3e9018d7&units=metric`;
  let response = await fetch(url)
  let data  = await response.json();
  setWeather(data);
  };

 useEffect(()=>{
      getCurrentLocation()
    },[])

  return (
    <>
    <img src="https://static.vecteezy.com/system/resources/previews/024/825/180/non_2x/3d-weather-icon-day-free-png.png"></img>
    <div className='container'>
      <WeatherBox weather={weather}/>
      <WeatherButton/>
    </div>
    </>
  )
}

export default App
