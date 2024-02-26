import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";

function App() {
 return (
  <>
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home />} />
    </Routes>
   </BrowserRouter>
   {/* <p className='font-bold text-3xl'>Hello!</p> */}
  </>
 );
}

export default App;
