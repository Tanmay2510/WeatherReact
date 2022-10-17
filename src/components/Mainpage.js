import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import './Mainpage.css';
import axios from "axios";
import { motion } from "framer-motion";
import SunIcon from './icons/Sunicon';
import Thermometer from './icons/Thermometer';
export var CityName = "";
function Mainpage() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [iscityenter, setcityenter] = useState(false);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
  CityName = data.name;
  const navigate = useNavigate();
const searchLocation =(event) => {

  if (event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data);
      
      setcityenter(true);
    }).catch(err=>{
      navigate("/WHAT");
    })
    setLocation('');
  }
}

  const navigforec = ()=>  {
    console.log("getiing clicked");
    navigate("/forecaste");
  }
    var iconcode= data.main ? data.weather[0].icon:null;
    var theicon = "http://openweathermap.org/img/w/"+iconcode+".png";
  
return (
   <motion.div
   exit={{ opacity: 0.1 }}
>
    <div className='allSection' >
    {
      iscityenter ? null : 
        <div className='thepara'>
        <SunIcon />
     
        <h2>Weather {<Thermometer/>} Forecast</h2>
        <hr></hr>
        <p>Get weather and 3 day forecast of your city </p>
        <input
        defaultValue=""
        value={location}  //final res of the user text
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter CityName'
        type="text"
        className='searchbutton1'  
      />
        </div>
     
    }

  
  


    <div className='topsection'>
   
    <div className='titl'>
    {
      iscityenter ?    <input
      defaultValue=""
      value={location}  //final res of the user text
      onChange={event => setLocation(event.target.value)}
      onKeyPress={searchLocation}
      placeholder='Enter CityName'
      type="text"
      className='searchbutton2'  
    /> : null
   
    }
 
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
      <img src ={theicon} alt="the icon"></img> : null
    }
    </div>
    </div>
    <div className='bottomsection'>
    {
      iscityenter ? 
  
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
    : null 
  }
    </div>
    
    {
    
      iscityenter ? 
    

      <motion.button 
      variant="primary" 
      size="lg" 
      onClick={navigforec} 
      className='forecast'
      whileHover={{
        scale:1.1,
      }}
      drag
      dragConstraints={{
        top: -25,
        left: -25,
        right: 25,
        bottom: 25,
      }}
      >
     
      Forecast for {data.name}
    </motion.button>
    
     :null 

    }

    <h4 style={{marginBottom:"1vw"}}>Made with &#10084; Tanmay Raikwar</h4>

    </div>
    </motion.div>
  )
}

export default Mainpage;