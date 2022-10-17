import React, { useEffect, useState } from 'react'
import Rain from './icons/Rain'
import Snow from './icons/Snow'
import Fog from './icons/Fog'
import Sun from './icons/Sun'
import Lightning from './icons/Lightning'
import "./Forecast.css";
import ss  from "../images/season.png"

import { Draggable } from 'react-drag-reorder'
import Forecastcards from './Forecastcards'
import Particl from './Particl'
import { CityName } from './Mainpage'
import axios from "axios"
import { Grid } from '@mui/material'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
function Forecast() {
// console.log(CityName);
const navigate = useNavigate();
const [data,setdata] = useState({});
   const forecaste = `https://api.openweathermap.org/data/2.5/forecast?q=${CityName}&units=metric&cnt=32&appid=${process.env.REACT_APP_API_KEY}`;
    console.log(forecaste);
    const [isActive, setIsActive] =useState(false);

    const hand = ()=>{
      setIsActive(!isActive);
      navigate("/");
    }
    useEffect(() => {
    axios.get(forecaste).then((response) => {
        setdata(response.data)
          });
          // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])
    var ct =0;
    var i =0;
    while(i<8){
      var apidate = data.list ? data.list[i].dt_txt : null ;
      console.log(apidate)
      var currtime = apidate ? apidate.substring(11,13) : null;
      console.log(currtime)
      if(currtime === "00"){
        ct = 7;
      }
      else if(currtime === "03"){
        ct = 6;
      }
      else if(currtime === "06"){
        ct = 5;
      }
      else if(currtime === "09"){
        ct = 4;
      }
      else if(currtime === "12"){
        ct = 3;
      }
      else if(currtime === "15"){
        ct = 2;
      }
      else if(currtime === "18"){
        ct = 1;
      }
      else if(currtime === "21"){
        ct = 0;
      }
        i++;
    }
    console.log("ct" + ct)
    var x = 32 - ct;
    console.log(x);
     var iconcode;
    var icon;
     iconcode = data.list ? data.list[ct].weather[0].icon : null ; 
     icon = "http://openweathermap.org/img/w/"+iconcode+".png"; 
     var theelem ={
      dt: data.list ? data.list[ct].dt_txt : null ,
      tm:data.list ? data.list[ct].main.temp : null ,
      hm: data.list ? data.list[ct].main.humidity : null ,
      ws:data.list ? data.list[ct].wind.speed: null ,
      ico: icon 
    }
    console.log(ct);

    iconcode = data.list ? data.list[ct+2].weather[0].icon : null ; 
    console.log(iconcode);
    icon = "http://openweathermap.org/img/w/"+iconcode+".png";

   var thesecelem={  
      dt: data.list ? data.list[ct+2].dt_txt : null ,
      tm:data.list ? data.list[ct+2].main.temp : null ,
      hm: data.list ? data.list[ct+2].main.humidity : null ,
      ws:data.list ? data.list[ct+2].wind.speed: null ,
      ico: icon 
    }
    iconcode = data.list ? data.list[ct+4].weather[0].icon : null ; 
    
    icon = "http://openweathermap.org/img/w/"+iconcode+".png";

  var thethirelem={
    dt: data.list ? data.list[ct+4].dt_txt : null ,
    tm:data.list ? data.list[ct+4].main.temp : null ,
    hm: data.list ? data.list[ct+4].main.humidity : null ,
    ws:data.list ? data.list[ct+4].wind.speed: null ,
    ico: icon 
  }
  iconcode = data.list ? data.list[ct+6].weather[0].icon : null ; 
  console.log(iconcode);
  icon = "http://openweathermap.org/img/w/"+iconcode+".png";

  var thefrelem={
    dt: data.list ? data.list[ct+6].dt_txt : null ,
    tm:data.list ? data.list[ct+6].main.temp : null ,
    hm: data.list ? data.list[ct+6].main.humidity : null ,
    ws:data.list ? data.list[ct+6].wind.speed: null ,
    ico: icon 
  }
  iconcode = data.list ? data.list[ct+8].weather[0].icon : null ; 
  console.log(iconcode);
  icon = "http://openweathermap.org/img/w/"+iconcode+".png";

  var thefvelem={
    dt: data.list ? data.list[ct+8].dt_txt : null ,
    tm:data.list ? data.list[ct+8].main.temp : null ,
    hm: data.list ? data.list[ct+8].main.humidity : null ,
    ws:data.list ? data.list[ct+8].wind.speed: null ,
    ico: icon 
  }
  iconcode = data.list ? data.list[ct+10].weather[0].icon : null ; 
  console.log(iconcode);
  icon = "http://openweathermap.org/img/w/"+iconcode+".png";

  var thesxelem={
    dt: data.list ? data.list[ct+10].dt_txt : null ,
    tm:data.list ? data.list[ct+10].main.temp : null ,
    hm: data.list ? data.list[ct+10].main.humidity : null ,
    ws:data.list ? data.list[ct+10].wind.speed: null ,
    ico: icon 
  }
  iconcode = data.list ? data.list[ct+12].weather[0].icon : null ; 
  console.log(iconcode);
  icon = "http://openweathermap.org/img/w/"+iconcode+".png";

  var thesvelem={
    dt: data.list ? data.list[ct+12].dt_txt : null ,
    tm:data.list ? data.list[ct+12].main.temp : null ,
    hm: data.list ? data.list[ct+12].main.humidity : null ,
    ws:data.list ? data.list[ct+12].wind.speed: null ,
    ico: icon 
  }
  iconcode = data.list ? data.list[ct+14].weather[0].icon : null ; 
  console.log(iconcode);
  icon = "http://openweathermap.org/img/w/"+iconcode+".png";

  var theeielem={
    dt: data.list ? data.list[ct+14].dt_txt : null ,
    tm:data.list ? data.list[ct+14].main.temp : null ,
    hm: data.list ? data.list[ct+14].main.humidity : null ,
    ws:data.list ? data.list[ct+14].wind.speed: null ,
    ico: icon 
  }
  iconcode = data.list ? data.list[ct+16].weather[0].icon : null ; 
  console.log(iconcode);
  icon = "http://openweathermap.org/img/w/"+iconcode+".png";

  var thenielem={
    dt: data.list ? data.list[ct+16].dt_txt : null ,
    tm:data.list ? data.list[ct+16].main.temp : null ,
    hm: data.list ? data.list[ct+16].main.humidity : null ,
    ws:data.list ? data.list[ct+16].wind.speed: null ,
    ico: icon 
  }
  iconcode = data.list ? data.list[ct+18].weather[0].icon : null ; 
  console.log(iconcode);
  icon = "http://openweathermap.org/img/w/"+iconcode+".png";

  var theteelem={
    dt: data.list ? data.list[ct+18].dt_txt : null ,
    tm:data.list ? data.list[ct+18].main.temp : null ,
    hm: data.list ? data.list[ct+18].main.humidity : null ,
    ws:data.list ? data.list[ct+18].wind.speed: null ,
    ico: icon 
  }
  iconcode = data.list ? data.list[ct+20].weather[0].icon : null ; 
  console.log(iconcode);
  icon = "http://openweathermap.org/img/w/"+iconcode+".png";

  var theelelem={
    dt: data.list ? data.list[ct+20].dt_txt : null ,
    tm:data.list ? data.list[ct+20].main.temp : null ,
    hm: data.list ? data.list[ct+20].main.humidity : null ,
    ws:data.list ? data.list[ct+20].wind.speed: null ,
    ico: icon 
  }
  iconcode = data.list ? data.list[ct+22].weather[0].icon : null ; 
  console.log(iconcode);
  icon = "http://openweathermap.org/img/w/"+iconcode+".png";

  var thetlelem={
    dt: data.list ? data.list[ct+22].dt_txt : null ,
    tm:data.list ? data.list[ct+22].main.temp : null ,
    hm: data.list ? data.list[ct+22].main.humidity : null ,
    ws:data.list ? data.list[ct+22].wind.speed: null ,
    ico: icon 
  }
  return (
    <motion.div
    exit={{ opacity: 0.1 }}>
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
    <Grid container rowSpacing  = {2}  spacing={{ xs: 2, md: 1}} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={3}>
        <Forecastcards 
        dt = {theelem.dt}
         tempp = {theelem.tm}
        clname= "card night"
        humm = {theelem.hm}
        wss = {theelem.ws}
        ic = {theelem.ico}
       
    />
        </Grid>
        <Grid item xs={3}>
        <Forecastcards  
        dt = {thesecelem.dt}
        tempp = {thesecelem.tm}
        clname= "card every"
        humm = {thesecelem.hm}
        wss = {thesecelem.ws}
        ic = {thesecelem.ico}
       
    />
        </Grid>
        <Grid item xs={3}>
        <Forecastcards 
        dt = {thethirelem.dt}
         tempp = {thethirelem.tm}
        clname= "card eve"
        humm = {thethirelem.hm}
        wss = {thethirelem.ws}
        ic = {thethirelem.ico}
       
    />
        </Grid>
        <Grid item xs={3}>
        <Forecastcards  
        dt = {thefrelem.dt}
        tempp = {thefrelem.tm}
        clname= "card warm"
        humm = {thefrelem.hm}
        wss = {thefrelem.ws}
        ic = {thefrelem.ico}
       
    />
        </Grid>
        <Grid item xs={3}>
        <Forecastcards  
        dt = {thefvelem.dt}
        tempp = {thefvelem.tm}
        clname= "card night"
        humm = {thefvelem.hm}
        wss = {thefvelem.ws}
        ic = {thefvelem.ico}
       
    />
        </Grid>
        <Grid item xs={3}>
        <Forecastcards 
        dt = {thesxelem.dt}
         tempp = {thesxelem.tm}
        clname= "card every"
        humm = {thesxelem.hm}
        wss = {thesxelem.ws}
        ic = {thesxelem.ico}
       
    />
        </Grid>
        <Grid item xs={3}>
        <Forecastcards 
        dt = {thesvelem.dt}
         tempp = {thesvelem.tm}
        clname= "card eve"
        humm = {thesvelem.hm}
        wss = {thesvelem.ws}
        ic = {thesvelem.ico}
       
    />
        </Grid>
        <Grid item xs={3}>
        <Forecastcards 
        dt = {theeielem.dt}
         tempp = {theeielem.tm}
        clname= "card warm"
        humm = {theeielem.hm}
        wss = {theeielem.ws}
        ic = {theeielem.ico}
       
    />
        </Grid>
        <Grid item xs={3}>
        <Forecastcards 
        dt = {thenielem.dt}
         tempp = {thenielem.tm}
        clname= "card night"
        humm = {thenielem.hm}
        wss = {thenielem.ws}
        ic = {thenielem.ico}
       
    />
        </Grid>
        <Grid item xs={3}>
        <Forecastcards  
        dt = {theteelem.dt}
        tempp = {theteelem.tm}
        clname= "card every"
        humm = {theteelem.hm}
        wss = {theteelem.ws}
        ic = {theteelem.ico}
       
    />
        </Grid>
        <Grid item xs={3}>
        <Forecastcards  
        dt = {theelelem.dt}
        tempp = {theelelem.tm}
        clname= "card eve"
        humm = {theelelem.hm}
        wss = {theelelem.ws}
        ic = {theelelem.ico}
       
    />
        </Grid>
        <Grid item xs={3}>
        <Forecastcards  
        dt = {thetlelem.dt}
        tempp = {thetlelem.tm}
        clname= "card warm"
        humm = {thetlelem.hm}
        wss = {thetlelem.ws}
        ic = {thetlelem.ico}
       
    />
        </Grid>
        </Grid>
          
    <div className='iconsp '>
   
    <motion.div
    className="mot"
    onClick={hand}
    animate={{
      rotate: isActive ? 360 : 0
    }}>
    <img src={ss}  alt="backimg" style={{width:"15%"}}></img>
    </motion.div>

    </div> 
    <h4 style={{marginBottom:"auto"}}>Made with &#10084; Tanmay Raikwar</h4>

    </div>

    </div>
    </motion.div>

  )
}

export default Forecast
