import React from 'react'
import { motion } from 'framer-motion'

function Fog() {
  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" 
    style={{fill:"#9795f0"}}
    whileHover={{ scale: 1.4 }}
    width="5vw" height="5vw" fill="currentColor" class="bi bi-cloud-fog-fill" viewBox="0 0 16 16">
    <path d="M3 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm10.405-9.473a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 12H13a3 3 0 0 0 .405-5.973z"/>
  </motion.svg>
    )
}

export default Fog