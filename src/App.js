
import Front from "./Components/Basics/Basic/Front";
import Home from "./Components/Basics/Basic/Home";
import Resturent from "./Components/Basics/Basic/Resturent";
import Orders from "./Components/Basics/Basic/Orders";
import Contact from "./Components/Basics/Basic/Contact";
import { Route, Routes } from "react-router-dom";




// import UseEffect from "./Components/Hooks/UseEffect";
// import UseReducer from "./Components/Hooks/UseReducer";
import ToDo from "./Components/ToDo React/ToDo";



// import UseState from "./Components/Hooks/UseState";

import React from 'react';

// import Temp from './Components/Wheather/Temp';




const App = () => {
  return (
    
    <>
    <Front/>  
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/resturent" element={ <Resturent/>}/>
      <Route path="/orders" element={ <Orders/>}/>
      <Route path="/contact" element={ <Contact/>}/>
     </Routes>

   



     {/* <UseState/> */}
     {/* <UseEffect/> */}
     {/* <UseReducer/> */}
     {/* <ToDo/> */}
     {/* <Temp/> */}
   </>
    
   
    
  
  );
};



export default App;