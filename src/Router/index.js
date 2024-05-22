import { Route,Routes } from "react-router-dom"
import React from 'react'
import Home from "../Screen/Home"
import Home2 from "../Screen/Home2"
import OurCompany from "../Screen/OurCompany"
import Locations from "../Screen/Locations"
import Vehicles from "../Screen/Vehicles"

import Contact from "../Screen/Contact"
import Details from "../Screen/Details"

export default function RouteNav() {
  return (
    <Routes>
            <Route exact path='/'Component={Home}/>

            <Route exact path='/'Component={Home2}/>
            <Route  exact path='/ourcompany'Component={OurCompany}/>
            
            <Route exact path='/Vehicles'Component={Vehicles}/>
            <Route exact path='/Locations'Component={Locations}/>
            
        
            <Route exact path='/Contact'Component={Contact}/>
            <Route exact path='/Details'Component={Details}/>
            
            

            
        </Routes>
  )
}
