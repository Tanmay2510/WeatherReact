import React, { useState } from 'react'
import Rain from './icons/Rain'
import Snow from './icons/Snow'
import Fog from './icons/Fog'
import Sun from './icons/Sun'
import Lightning from './icons/Lightning'
import "./Forecast.css";
import { Draggable } from 'react-drag-reorder'
import { motion } from 'framer-motion'

function Forecast() {
  const [isOpen,setisopen] = useState(false);
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
    <div className='forflex'>
    <motion.div transition={{layout : {duration:1,type:"spring"}}} 
    layout onClick={() => setisopen(!isOpen)} className= "card night" 
    whileHover={{ scale: 1.1 }}
    >
    <motion.h2  layout="position"> Jabalpur </motion.h2>
    <motion.p layout="position">26/12/2002 00:00:00</motion.p>
    {isOpen &&(
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1}}
    >
    <p>the temp</p>
    <p>again temp</p>
    </motion.div>
    )}
    
    </motion.div>
    <motion.div layout onClick={() => setisopen(!isOpen)} className= "card every" 
    whileHover={{ scale: 1.1 }}>
    <motion.h2 > Jabalpur </motion.h2>
    <motion.p  >26/12/2002 00:00:00</motion.p>
    {isOpen &&(
    <motion.div>
    <p>the temp</p>
    <p>again temp</p>
    </motion.div>
    )}
    
    </motion.div>
    <motion.div layout onClick={() => setisopen(!isOpen)} className= "card warm"
    whileHover={{ scale: 1.1 }} >
    <motion.h2> Jabalpur </motion.h2>
    <motion.p>26/12/2002 00:00:00</motion.p>
    {isOpen &&(
    <motion.div>
    <p>the temp</p>
    <p>again temp</p>
    </motion.div>
    )}
    
    </motion.div>
    <motion.div layout onClick={() => setisopen(!isOpen)} className= "card eve" 
    whileHover={{ scale: 1.1 }}>
    <motion.h2> Jabalpur </motion.h2>
    <motion.p>26/12/2002 00:00:00</motion.p>
    {isOpen &&(
    <motion.div>
    <p>the temp</p>
    <p>again temp</p>
    </motion.div>
    )}
    
    </motion.div>
    
    </div>
    <div className='forflex'>
    <motion.div layout onClick={() => setisopen(!isOpen)} className= "card night" 
    whileHover={{ scale: 1.1 }}>
    <motion.h2> Jabalpur </motion.h2>
    <motion.p>26/12/2002 00:00:00</motion.p>
    {isOpen &&(
    <motion.div>
    <p>the temp</p>
    <p>again temp</p>
    </motion.div>
    )}
    
    </motion.div>
    <motion.div layout onClick={() => setisopen(!isOpen)} className= "card every"
    whileHover={{ scale: 1.1 }} >
    <motion.h2> Jabalpur </motion.h2>
    <motion.p>26/12/2002 00:00:00</motion.p>
    {isOpen &&(
    <motion.div>
    <p>the temp</p>
    <p>again temp</p>
    </motion.div>
    )}
    
    </motion.div>
    <motion.div layout onClick={() => setisopen(!isOpen)} className= "card warm" 
    whileHover={{ scale: 1.1 }}>
    <motion.h2> Jabalpur </motion.h2>
    <motion.p>26/12/2002 00:00:00</motion.p>
    {isOpen &&(
    <motion.div>
    <p>the temp</p>
    <p>again temp</p>
    </motion.div>
    )}
    
    </motion.div>
    <motion.div layout onClick={() => setisopen(!isOpen)} className= "card eve" 
    whileHover={{ scale: 1.1 }}>
    <motion.h2> Jabalpur </motion.h2>
    <motion.p>26/12/2002 00:00:00</motion.p>
    {isOpen &&(
    <motion.div>
    <p>the temp</p>
    <p>again temp</p>
    </motion.div>
    )}
    
    </motion.div>
    
    </div>
    <div className='forflex'>
    <motion.div layout onClick={() => setisopen(!isOpen)} className= "card night"
    whileHover={{ scale: 1.1 }} >
    <motion.h2> Jabalpur </motion.h2>
    <motion.p>26/12/2002 00:00:00</motion.p>
    {isOpen &&(
    <motion.div>
    <p>the temp</p>
    <p>again temp</p>
    </motion.div>
    )}
    
    </motion.div>
    <motion.div layout onClick={() => setisopen(!isOpen)} className= "card every"
    whileHover={{ scale: 1.1 }} >
    <motion.h2> Jabalpur </motion.h2>
    <motion.p>26/12/2002 00:00:00</motion.p>
    {isOpen &&(
    <motion.div>
    <p>the temp</p>
    <p>again temp</p>
    </motion.div>
    )}
    
    </motion.div>
    <motion.div layout onClick={() => setisopen(!isOpen)} className= "card warm" 
    whileHover={{ scale: 1.1 }}>
    <motion.h2> Jabalpur </motion.h2>
    <motion.p>26/12/2002 00:00:00</motion.p>
    {isOpen &&(
    <motion.div>
    <p>the temp</p>
    <p>again temp</p>
    </motion.div>
    )}
    
    </motion.div>
    <motion.div layout onClick={() => setisopen(!isOpen)} className= "card eve" 
    whileHover={{ scale: 1.1 }}>
    <motion.h2 layout> Jabalpur </motion.h2>
    <motion.p layout>26/12/2002 00:00:00</motion.p>
    {isOpen &&(
    <motion.div>
    <p>the temp</p>
    <p>again temp</p>
    </motion.div>
    )}
    
    </motion.div>
    
    </div>
    </div>
  )
}

export default Forecast
