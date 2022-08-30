import React from 'react'
import { motion } from 'framer-motion'
function Lightning() {
  return (
    <motion.svg 
    style={{fill:"#9795f0"}}
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.4 }}
    width="5vw" height="5vw" fill="currentColor" class="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
    <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
  </motion.svg>
  )
}

export default Lightning