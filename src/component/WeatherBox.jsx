import React from 'react'

const WeatherBox = ({weather}) => {
  console.log("propsW",weather);
  return (
    <div className='WeatherBox'>
      <div>{weather?.name}</div>
      <h2>{weather?.main.temp} °C / {(weather?.main.temp * 1.8 + 32).toFixed(1)} °F</h2>
      <h2>{weather?.weather[0].description}</h2>
    </div>
  )
}

export default WeatherBox
