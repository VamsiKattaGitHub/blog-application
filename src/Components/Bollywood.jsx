import React, { useState , useEffect } from 'react'
import Food from './Food.jsx';
import Fitness from './Fitness.jsx';
import{Routes,Route} from "react-router-dom"
import BollywoodNews from './BollywoodNews.jsx';
const Bollywood = () => {
    return(
    <>  <Routes>
    <Route path="/bollywood/bollywoodnews" element={<BollywoodNews />} />
    <Route path="/bollywood/fitness" element={<Fitness />} />
    <Route path="/bollywood/food" element={<Food />} />
  </Routes>
</>
);
};
  
export default Bollywood
