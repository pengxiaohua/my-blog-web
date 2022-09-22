import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import AboutMe from './pages/AboutMe'
import BackStage from './pages/BackStage';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/back-stage" element={<BackStage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
