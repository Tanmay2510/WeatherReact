import React, { useState } from 'react'
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
const [thedata,setthedata] = useState({});
   const forecaste = `https://api.openweathermap.org/data/2.5/forecast?q=${CityName}&units=metric&cnt=18&appid=${process.env.REACT_APP_API_KEY}`;
    console.log(forecaste);
    axios.get(forecaste).then((response => {
        setthedata(response.thedata)
    }))
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
    
    <Forecastcards 
 />
    <Forecastcards />
    <Forecastcards />
    </div>
    </div>

    </div>

  )
}

export default Forecast
