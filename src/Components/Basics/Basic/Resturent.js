import React,{useState} from 'react';
import "./Style.css"
import Menu from './menuApi';

import MenuCard from './MenuCard';
import Navbar from './Navbar';



const uniqueList=[...new Set(Menu.map((currElem)=>{
    return currElem.category;
})),"All"]


const Resturent = () => {
     // eslint-disable-next-line no-undef
     const[menuData,setMenuData] =useState(Menu);
     // eslint-disable-next-line no-unused-vars
     const[menuList,setMenuList]
     =useState(uniqueList);
      
     const filterItem=(category)=>{
        if(category==="All"){
            setMenuData(Menu)
            return;
        }
        const updatedList=Menu.filter((curElem)=>{
            return curElem.category===category;
        })
        setMenuData(updatedList);

     }
    

  return (
   <>
   <Navbar filterItem={filterItem}     menuList={menuList}/>
   
   <MenuCard menuData={menuData} />
   </>
  )
}

export default Resturent