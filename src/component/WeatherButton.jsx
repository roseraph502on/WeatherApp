import React from 'react'

const WeatherButton = ({ cities , setCity}) => {
  // console.log("WeatherButton")
 
  return (
    <div className="btncon">
      <button className='curW' 
      onClick={()=>setCity("")}
      >♤ † 현재 위치  £ ¢</button>
      <div className='otherCity'>
        {cities.map((item, index)=>(
          <button key={index}
          onClick={()=>setCity(item)}
          >{item}</button>
        ))} 
      </div>

    </div>
  );
}

export default WeatherButton
