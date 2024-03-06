import React, { useContext } from 'react'
import { DeviceContext } from '../App';
import {DeviceCard} from '../Features/DeviceCard'

function DeviceGrid() {
  const devices = useContext(DeviceContext);
  return (
    <>
    <h2>Estos son tus dispositivos:</h2>
    <div className='flex p-2'>
      {devices.map((device) => {
       return <DeviceCard {...device} />
      })}
    </div>
    </>
  );
 }

export {DeviceGrid}