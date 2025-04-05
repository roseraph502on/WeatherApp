import './App.css'
import { useEffect,useState } from 'react'
import WeatherBox from './component/WeatherBox.jsx';
import WeatherButton from './component/WeatherButton.jsx';
import ClipLoader from "react-spinners/ClipLoader";


function App() {
  const[weather,setWeather]=useState(null);
  const[loading,setLoading] = useState(false);
  const [city, setCity]=useState("");
  const cities = ["Paris", "New york", "Tokyo","Seoul"];

  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat,lon);
    });
  };

  const getWeatherByCurrentLocation = async(lat,lon) => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7e23dd278af75d56e9aaf95a3e9018d7&units=metric`;
    let response = await fetch(url)
    let data  = await response.json();
    setLoading(false);
    console.log("getWeatherByCurrentLocation현재 위치 : ",lat,lon)
    setWeather(data);
  };

  const getWeatherByCity = async(city) => {
    console.log("getWeatherByCity : ",city)
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7e23dd278af75d56e9aaf95a3e9018d7&units=metric`
    let response = await fetch(url)
    let data  = await response.json();
    console.log("data",data)
    setWeather(data);
  };

  useEffect(()=>{
    if(city==""){
      getCurrentLocation();
    }else{
      console.log("도시 버튼 클릭 :",city);
      getWeatherByCity(city);
    }
    },[city]);

  return (
    <>
    {loading ? ( <div className='load'> <ClipLoader color="white" loading={loading} size={200} />
      <h1>I'm Loading...</h1> </div>) : (
      <>
      <img src="https://static.vecteezy.com/system/resources/previews/024/825/180/non_2x/3d-weather-icon-day-free-png.png"></img>
      <h2>How's the weather?</h2>
      <div className='container'>
        <WeatherBox weather={weather}/>
        <WeatherButton cities={cities} setCity={setCity}/>
      </div>
      </>
    )}
    </>
  )
}

export default App
