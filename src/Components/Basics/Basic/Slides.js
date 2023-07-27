import React from 'react'
import SimpleImageSlider from 'react-simple-image-slider'
import './front.css'

const Slides = () => {
    const slideImg=[
        {
          url: "SlidesImg/6169319.jpg",
            
        },
        {
          url: "SlidesImg/7066943.jpg",
            
        },
        {
          url: "SlidesImg/7066884.jpg",
            
        },
        {
          url: "SlidesImg/7066844.jpg",
            
        },
        {
          url: "SlidesImg/7066826.jpg",
            
        },
        {
          url: "SlidesImg/7066812.jpg",
            
        },
        {
          url: "SlidesImg/7066809.jpg",
            
        },

    ]
  return (
    <>
    <div className="sliderContainer">
      <SimpleImageSlider
                  width={693.5}
                  height={900}
                  images={slideImg}
                  showNavs={true}
                  showBullets={true}
                
               />
      



        </div>

   
    
    </>
    
  )
}

export default Slides;