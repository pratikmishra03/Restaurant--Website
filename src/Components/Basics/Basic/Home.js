import React from 'react'
import './front.css'

import Resturent from './Resturent';
import Slides from './Slides';

const Home = () => {
  return (
    <>
    <div className="Home">

   
    <div className='HomeCotainer'>
        
    <div className="HomePage">
       
    </div>
    <div className='HomeContent'>
        <h3 className='HomeHeading heading'>Welcome To Beveri</h3>
        <h1 className='HomeHeading headingContent'>Georgin Food and Wine Experience in San Francisco Bay Area Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste iure unde officiis non aspernatur facere ad in et aliquid neque, sunt, veritatis maiores harum quidem quasi similique iusto eius eos nulla asperiores labore! Adipisci!</h1>
        <span className='btn'>

        <button className='TableButton'>Book A Table</button>
        </span>
    </div>
    </div>
    <Slides/>
    </div>
  
    </>
  )
}

export default Home;