import React, { useState } from 'react'
import "./WHAT.css"
import {motion} from "framer-motion"
import ss  from "../images/season.png"
function Notdate() {
  const [isActive, setIsActive] =useState(false);

  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5}}className='forfl'>
    <div className='what'>
    <p>Incorrect City Name!!</p>

    <motion.div
    className="mot"
    onClick={() => setIsActive(!isActive)}
    animate={{
      rotate: isActive ? 360 : 0
    }}>
    <img src={ss}  alt = "back img" style={{width:"20%"}}></img><br></br>

    </motion.div>
    
    <a href="/" className='lin'>Go Back</a>
    </div>
    </motion.div>

  )
}
// 
export default Notdate