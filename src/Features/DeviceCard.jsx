import React from 'react'

function DeviceCard({name, user, state, time}) {
  return (
    <div className='m-1 p-5 bg-gray-500/20 rounded-xl'>
      <p><span className='font-bold'>Equipo: </span> {name}</p>
      <p><span className='font-bold'>Usuario: </span> {user}</p>
      <p><span className='font-bold'>state: </span> {state}</p>
      <p><span className='font-bold'>Tiempo: </span> {time}</p>
    </div>
  );
 }

export {DeviceCard}