import React from 'react'

function Navbar() {
  return (
   <nav className="flex justify-between items-center p-5 bg-slate-100 w-full">
    <div className="text-xl font-bold">CyberControl</div>
    <span className="text-sm font-bold bg-blue-400 rounded-lg p-2 text-white hover:cursor-pointer hover:bg-blue-500">
      Sign In
    </span>
   </nav>
  );
 }

export {Navbar}