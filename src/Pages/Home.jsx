import React from 'react'
import { Layout } from '../Layouts/Layout';

function Home() {
  return (
   <Layout>
    <DeviceGrid/>
   </Layout>
  );
 }

 function DeviceGrid() {
  return (
    <div>
      Estos son tus dispositivos:
    </div>
  );
 }

export {Home}