/* eslint-disable no-unused-vars */
import React from 'react'

const MenuCard = ({ menuData }) => {

  return (
    <>
      <section className='main-card--cointainer'>
      {menuData.map((curElem) => {
        const {id,name,category,image,description}=curElem;
        return (
          <>
            <div className="card-container"key={curElem.id}>
              <div className="card">
                <div className="card-body">
                  <span className='card-number card-circle subtle '>{id}</span>
                  <span className='card-author subtle'>{name}</span>
                  <h2 className='card-title'>{name}</h2>
                  <span className='card-description subtle'>
                    i love maggy realy oo Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nobis laudantium officia ut inventore ea rerum labore enim quos exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fugit!
                  </span>
                  <div className="card-read">Read</div>
                  <img src={image} alt="images" className='card-media' />
                  <span className='card-tag subtle'>Order Now</span>
                </div>
              </div>
            </div>
         
        
         </> 
        )  
      })
      }
      </section>
   </>
 )
}

export default MenuCard