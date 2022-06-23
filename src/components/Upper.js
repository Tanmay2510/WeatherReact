import React from 'react'
import logo from '../images/blacklog.png';
import './Upper.css';
function Upper() {
  return (
    <div> <div className="upp">
    <p className="firstP">Weather</p>
    <img src={logo} className='theimg'></img>
    <p className="secondP">Forecast</p>
   
    </div>
    <hr className='line'></hr></div>
  )
}

export default Upper