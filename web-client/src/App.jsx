import { useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom';

import './App.css'
import MenuPage from './pages/menuPage';
import LocalPage from './pages/localPage';

function App() {

  return (
    <>
      <Routes>
            <Route path="/" element={<MenuPage />} />
            <Route path="/local" element={<LocalPage/>} />

            <Route path="/config" element={''} />    



            <Route path="*" element={<h1> Ruta no encontrada </h1>} />  
          </Routes>
    </>
  )
}

export default App
