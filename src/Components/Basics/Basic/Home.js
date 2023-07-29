import React from 'react'
import './front.css'
import { NavLink } from 'react-router-dom'

import Resturent from './Resturent';
import Slides from './Slides';


const Home = () => {
  return (
    <>
  

   
    <div className='HomeCotainer'>
    
       <div className='HomeContent'>
        <h3 className='heading'>Welcome To Beveri</h3>
        
        <h1 className='headingContent'>Georgin Food and Wine Experience in San Francisco Bay Area Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste iure unde officiis non aspernatur facere ad in et aliquid neque, sunt, veritatis maiores harum quidem quasi similique iusto eius eos nulla asperiores labore! Adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam iusto rerum, suscipit omnis voluptatem necessitatibus reprehenderit deleniti repellat tempora neque labore non. Mollitia sapiente totam sequi neque quibusdam deserunt eligendi dolores porro in dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, maiores!</h1>
         <div className='button5'>

        <span className='btn'>
        <button className='TableButton'>Book A Table</button></span>
        <span className='btn'>
        <button className='TableButton'><NavLink to="/resturent">Our Menu</NavLink></button></span>
      
      
         </div>
      
    </div>
    </div>
    <Slides/>
  
    </>
  )
}

export default Home;