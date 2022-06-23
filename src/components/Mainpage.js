import React, { useState } from 'react';
import back from '../images/bg.jpg';
import './Mainpage.css';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Upper from './Upper';

function Mainpage() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [iscityenter, setcityenter] = useState(false);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=8044c4aa7ab13872f31a9b8d203363a4`;
//  // <img src={back} className='bg'></img>
  

const searchLocation = (event) => {
  console.log(event.target.value);  //every character being inserted
  console.log(location);
  if (event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
      setcityenter(true);
    })
    setLocation('');
  }
}
    var iconcode= data.main ? data.weather[0].icon:null;
var theicon = "http://openweathermap.org/img/w/"+iconcode+".png";
// console.log(theicon);
return (
    <div className='allSection'>

    <input
    value={location}  //final res of the user text
    onChange={event => setLocation(event.target.value)}
    onKeyPress={searchLocation}
    placeholder='Enter Location'
    type="text"
    className='searchbutton' />
  

    <div className='topsection'>
    <div className='titl'>
        <p>{data.name}</p>
    </div>
    <div className='temperatur'>
   {data.main ?  <h1>{data.main.temp.toFixed()}°C</h1> : null} 
    </div>
    <div className='weather'>
    <p>{data.main ? data.weather[0].description : null}</p>
    </div>
    <div className='icon'>
    { iscityenter ? 
      <img src ={theicon} ></img> : null
    }
    </div>
    </div>
    <div className='bottomsection'>
    <div className='morph'>
    <div className='windspeed'>
   {data.main ?  <p className='theP'>{data.wind.speed}m/s</p> : null } 
    <p >Wind speed</p>
    </div>
    <div className='chipchip'>
    {data.main ? <p className='theP'>{data.main.humidity}%</p> : null}
    <p >Humid</p>
    </div>
    <div className='tempagain'>
    {data.main ?<p className='theP'> {data.main.feels_like}°C</p>: null} 
    <p >Feels Like</p>
    </div>
    </div>
    </div>
    {
      iscityenter ? 
      <Button variant="primary" size="lg" disabled className='forecast'>
      Forecast for {data.name}
    </Button> :null 
    }
   
    
    </div>
  )
}

export default Mainpage;