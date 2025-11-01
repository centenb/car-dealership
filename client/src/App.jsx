import { useState } from 'react'
import './App.css'
import { Login } from './components/Login'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router' 

function App() {
  

  return (
    <>
      <div>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </Router>
      </div>
    </>
  )
}

export default App
