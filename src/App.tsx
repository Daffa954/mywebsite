import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from './pages/home'
import { About } from './pages/About';
import { MyProject } from './pages/MyProject';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/myprojects" element={<MyProject />} />

      </Routes>
    </Router>
  )
}

export default App
