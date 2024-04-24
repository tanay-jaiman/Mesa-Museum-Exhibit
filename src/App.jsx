import { Route, Routes } from 'react-router-dom'
import React, {useEffect } from 'react';
import Homepage from './Homepage/Homepage.jsx'
import Menu from './Menu/Menu.jsx'
import MesaTemple from './MesaTemple/mesatemple.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/mesatemple" element={<MesaTemple />}/>
        
      </Routes>
    </>

  )
}


export default App