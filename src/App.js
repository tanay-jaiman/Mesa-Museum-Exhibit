import { Route, Routes } from 'react-router-dom'
import React, {useEffect } from 'react';
import Homepage from './Homepage.jsx'
import Menu from './Menu.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/" element={<Menu />}/>
      </Routes>
    </>

  )
}


export default App