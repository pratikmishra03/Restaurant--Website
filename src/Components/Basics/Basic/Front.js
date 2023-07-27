import React from 'react'

import './front.css'
// import './Style.css'
import { NavLink } from 'react-router-dom'
import Slider from './Slides'



const Front = () => {
  return (
    <>
   
    <div className="container">
       <nav className='navbar2'>
        <ul className='ul'>
           
            <li className='FrontLi'><NavLink to="/"><img src="logo2.png" alt=""/></NavLink></li>
            <li className='FrontLi'><NavLink to="/home">Home</NavLink></li>
            <li className='FrontLi'><NavLink to="/resturent">Our Menu</NavLink></li>
            <li className='FrontLi'><NavLink to="/orders">Your Orders</NavLink></li>
            <li className='FrontLi'><NavLink to="/orders">Your Booking</NavLink></li>
            <li className='FrontLi'><NavLink to="/contact">Contact us</NavLink></li>
            
        </ul> 
        
    </nav>
    
 

    </div>

    </>
  )
}

export default Front