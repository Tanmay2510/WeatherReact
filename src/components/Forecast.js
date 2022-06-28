import React, { useEffect, useState } from 'react'
import Rain from './icons/Rain'
import Snow from './icons/Snow'
import Fog from './icons/Fog'
import Sun from './icons/Sun'
import Lightning from './icons/Lightning'
import "./Forecast.css";
import { Draggable } from 'react-drag-reorder'
import Forecastcards from './Forecastcards'
import Particl from './Particl'
import { CityName } from './Mainpage'
import axios from "axios"
function Forecast() {
console.log(CityName);
const [data,setdata] = useState({});
   const forecaste = `https://api.openweathermap.org/data/2.5/forecast?q=${CityName}&units=metric&cnt=18&appid=${process.env.REACT_APP_API_KEY}`;
    // console.log(forecaste);
    useEffect(() => {

   
    axios.get(forecaste).then((response) => {
        setdata(response.data)
          });
        },[])
  
    // var today = new Date()

  //  var  date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate()+1);
  //   var apidate = data.list ? data.list[0].dt_txt : null ;
  //   // var currdate = apidate.substring(8,11);
    const theelem ={
      tm:data.list ? data.list[0].main.temp : null ,
      hm: data.list ? data.list[0].main.humidity : null ,
      ws:data.list ? data.list[0].wind.speed: null ,
      // ico:data.list ? data. : null 
    }

    
  return (
    <div>
    <Particl/>
    <div className='esehi'>
    <div  className='forebg' >
   
   
    <div className='iconspace '>
   
    <Draggable>
    <Lightning />
    <Sun /> 
    <Snow />
    <Rain />
    <Fog />
    </Draggable>
    </div>  
    
    <Forecastcards  tempp = {theelem.tm}
      humm = {theelem.hm}
      wss = {theelem.ws}
 />
    <Forecastcards  />
    <Forecastcards />
    </div>
    </div>

    </div>

  )
}

export default Forecast
