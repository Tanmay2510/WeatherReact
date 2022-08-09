import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom';
import Mainpage from './Mainpage';
import Forecast from './Forecast';
import WHAT from './WHAT';
import { AnimatePresence } from 'framer-motion';
function Animatedroutes() {
    const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
     <Routes location={location} key={location.pathname}>
    <Route exact path ="/" element={      <Mainpage/>   }>    </Route>
    <Route exact path ="/WHAT" element={   <WHAT />   }>    </Route>

    <Route exact path ="/forecaste" element={      <Forecast/>   }> </Route>
         </Routes>
   </AnimatePresence>

  )
}

export default Animatedroutes