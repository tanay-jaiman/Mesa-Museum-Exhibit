import { Route, Routes } from 'react-router-dom'
import React, {useEffect } from 'react';
import Homepage from './Homepage.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}/>
      </Routes>
    </>

  )
}


export default App