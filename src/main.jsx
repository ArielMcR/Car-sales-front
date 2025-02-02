import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Home from './pages/Homepage/Home.jsx'
import Stock from './pages/Stock/Stock.jsx';
import CarDetail from './pages/Car-detail/Car-detail.jsx';
import ScrollToTop from './utils/scrollTop.jsx';
import PageNotFound from './pages/Page-not-found/Page-not-found.jsx';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>

      <Route index element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/estoque" element={<Stock />} />
      <Route path='/carros/:id' element={<CarDetail />} />
    </Routes>
  </BrowserRouter>
)
