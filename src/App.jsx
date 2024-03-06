import React, { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";

const DeviceContext = createContext();

function App() {
  // const [devices, setDevices] = ()
 return (
  <DeviceContext.Provider value={[{
    id: 1,
    equipo: 'ASUS ROG',
    estado: 0,
    usuario: '',
    tiempo: 0,
  },{
    id: 2,
    equipo: 'ASUS ROG',
    estado: 1,
    usuario: 'Juan Garcia',
    tiempo: 60,
  }]}>
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home />} />
    </Routes>
   </BrowserRouter>
   {/* <p className='font-bold text-3xl'>Hello!</p> */}
  </DeviceContext.Provider>
 );
}

export {App, DeviceContext};
