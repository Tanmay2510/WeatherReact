import React from 'react'
import Rain from './icons/Rain'
import Snow from './icons/Snow'
import Fog from './icons/Fog'
import Sun from './icons/Sun'
import Lightning from './icons/Lightning'
import "./Forecast.css";
import { Draggable } from 'react-drag-reorder'
function Forecast() {
  return (
    <div  >
    <div className='iconspace'>
    <Draggable>
    <Lightning />
    <Sun /> 
    <Snow />
    <Rain />
    <Fog />
    </Draggable>
    </div>  
    <hr></hr>
    
    </div>
  )
}

export default Forecast