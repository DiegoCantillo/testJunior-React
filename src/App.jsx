import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
import ListPublication from './views/listPublication';
import Home from '../src/views/home'
import Navbar from './components/Navbar';


function App() {

  return (

    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/publications' element={<ListPublication />} />
      </Routes>
    </HashRouter >

  )
}

export default App
