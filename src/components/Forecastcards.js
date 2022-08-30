import {React , useState} from 'react'
import "./Forecastcard.css"
import { motion } from 'framer-motion'
import { CityName } from './Mainpage';

function Forecastcards(props) {
    const [isOpen,setisopen] = useState(false);

  return (
    <div>
    <div className='forflex'>
    <motion.div transition={{layout : {duration:0.3,type:"spring"}}} 
    layout onClick={() => setisopen(!isOpen)} className= {props.clname} 
    whileHover={{ scale: 1.1 }}
    >
    <motion.h2  layout="position"> {CityName} </motion.h2>
    <motion.p layout="position">{props.dt}</motion.p>
    {isOpen &&(
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.3}}
    >
    <p>Temperature: {props.tempp}°C </p>
    <p>Humidity: {props.humm}%</p>
    <p>WindSpeed: {props.wss}m/s </p>
    <img src = {props.ic} alt="an weather icon"></img>
    </motion.div>
    )}

    
    </motion.div>
   
    </div>
    </div>
  )
}

export default Forecastcards