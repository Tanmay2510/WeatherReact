import { motion } from 'framer-motion'; 
import React from "react"

function SunIcon() {
  return (
    <motion.svg  className="the"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="100"
      height="100"
  
    
    >
      <motion.path 
        stroke="#FFE6E6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        initial={{
         
            rotate: -45, 
            pathLength:0
          }}
          animate={{

            rotate: 0, 
            pathLength:1
          }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </motion.svg> 
  );
}

export default SunIcon;