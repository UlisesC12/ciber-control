import React, { useContext } from 'react'
import { DeviceContext } from '../App';

function DeviceGrid() {
  const devices = useContext(DeviceContext);
  return (
    <div>
      Estos son tus dispositivos:
      {devices.id}
    </div>
  );
 }

export {DeviceGrid}