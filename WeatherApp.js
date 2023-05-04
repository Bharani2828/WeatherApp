import { useState } from "react"

export default function App() {
  const[cityname,setCityname]=useState('')
  const[weather,setWeather]=useState({})

  const api ={
    key : "77040a3c9f33e566fafe1aa6c5dcb04d",
    base : "https://api.openweathermap.org/data/2.5/",
  }
  const showWeather = () => {
       fetch(`${api.base}weather?q=${cityname}&units=metric&APPID=${api.key}`)
       .then((res) => res.json()) 
       .then((resultz) => {
        setWeather(resultz)
        console.log(resultz)
       })}

  return (
    <div>
      <input onChange={(event)=>setCityname(event.target.value)} />
      <button onClick={showWeather}>Show weather</button>

   {typeof weather.main !== "undefined" ? ( //typeof is used to check whether the weather.main property exists and 
                                            //is defined before attempting to access its sub-properties such as temp and weather[0].main.
     <div>
      <p>City name:{weather.name}</p>
      <p>Temperature:{weather.main.temp}</p>
      <p>Weather condition:{weather.weather[0].main}</p>
      <p>Weather condition:{weather.weather[0].description}</p>
     </div>
      ):
       ("")}

    </div>
  )
}
