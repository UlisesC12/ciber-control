import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      {/* <p className='font-bold text-3xl'>Hello!</p> */}
    </>
  )
}

function Home() {
  return (
    <>
      <p>HOME</p>
    </>
  )
}

export default App
