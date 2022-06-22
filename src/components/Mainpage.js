import React from 'react';
import back from '../images/bg.jpg';
import './Mainpage.css';
function Mainpage() {
  // const url = 'https://api.openweathermap.org/data/2.5/weather?q=Jabalpur&appid=8044c4aa7ab13872f31a9b8d203363a4';
 // <img src={back} className='bg'></img>
  return (
    <div className='allSection'>
    
   
    <div className='topsection'>
    <div className='titl'>
        <p>Paris</p>
    </div>
    <div className='temperatur'>
    <h1>999 `C</h1>
    </div>
    <div className='weather'>
    <p>Stormy</p>
    </div>
    </div>
    <div className='bottomsection'>
    <div className='morph'>
    <div className='windspeed'>
    <p>155 mph</p>
    <p>Wind speed</p>
    </div>
    <div className='chipchip'>
    <p>60%</p>
    <p>Humid</p>
    </div>
    <div className='tempagain'>
    <p>76`F</p>
    <p>Temperature</p>
    </div>
    </div>
    </div>
    
    
    
    </div>
  )
}

export default Mainpage