import {React , useState} from 'react'
import "./Forecastcard.css"
import { motion } from 'framer-motion'
import { CityName } from './Mainpage';

function Forecastcards(props) {
    const [isOpen,setisopen] = useState(false);

  return (
    <div>
    <div className='forflex'>
    <motion.div transition={{layout : {duration:1,type:"spring"}}} 
    layout onClick={() => setisopen(!isOpen)} className= "card night" 
    whileHover={{ scale: 1.1 }}
    >
    <motion.h2  layout="position"> {CityName} </motion.h2>
    <motion.p layout="position">26/12/2002 00:00:00</motion.p>
    {isOpen &&(
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1}}
    >
    <p>{props.tempp} </p>
    <p>{props.humm}</p>
    </motion.div>
    )}
    
    </motion.div>
    <motion.div  transition={{layout : {duration:1,type:"spring"}}} 
    layout onClick={() => setisopen(!isOpen)} className= "card every"
    whileHover={{ scale: 1.1 }} >
    <motion.h2 layout="position "> {CityName} </motion.h2>
    <motion.p layout="position">26/12/2002 00:00:00</motion.p>
    {isOpen &&(
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1}}>
    <p>the temp</p>
    <p>again temp</p>
    </motion.div>
    )}
    
    </motion.div>

    <motion.div  transition={{layout : {duration:1,type:"spring"}}} 
    layout onClick={() => setisopen(!isOpen)} className= "card warm" 
    whileHover={{ scale: 1.1 }}>
    <motion.h2 layout="position"> {CityName} </motion.h2>
    <motion.p layout="position">26/12/2002 00:00:00</motion.p>
    {isOpen &&(
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1}}>
    <p>the temp</p>
    <p>again temp</p>
    </motion.div>
    )}
    
    </motion.div>

    <motion.div  transition={{layout : {duration:1,type:"spring"}}} 
    layout onClick={() => setisopen(!isOpen)} className= "card eve" 
    whileHover={{ scale: 1.1 }}>
    <motion.h2 layout="position"> {CityName} </motion.h2>
    <motion.p layout="position">26/12/2002 00:00:00</motion.p>
    {isOpen &&(
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1}}>
    <p>the temp</p>
    <p>again temp</p>
    </motion.div>
    )}
    
    </motion.div>
    </div>
    </div>
  )
}

export default Forecastcards