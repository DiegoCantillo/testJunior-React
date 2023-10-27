import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
import ListPublication from './views/listPublication/ListPublication';
import Home from '../src/views/home/index'
import Navbar from './components/Navbar';


function App() {

  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/publications' element={<ListPublication />} />
        </Routes>
      </HashRouter >
    </>
  )
}

export default App
