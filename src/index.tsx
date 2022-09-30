import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, unstable_HistoryRouter as Router } from "react-router-dom";

import { customHistory } from './utils';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe'
import BlogDetail from './pages/BlogDetail'
import BackStage from './pages/BackStage';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router history={customHistory}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path={`/blog-detail/:id`} element={<BlogDetail />} />
        <Route path="/back-stage" element={<BackStage />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
