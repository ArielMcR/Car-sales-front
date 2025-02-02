import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Home from './Screens/Homepage/Home.jsx'
import Stock from './Screens/Stock/Stock.jsx';
import CarDetail from './Screens/Car-detail/Car-detail.jsx';
import ScrollToTop from './utils/scrollTop.jsx';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route index element={<Home />} />
      {/* <Route path="*" element={<div>Not Found</div>} /> */}
      <Route path="/estoque" element={<Stock />} />
      <Route path='/carros/:id' element={<CarDetail />} />
    </Routes>
  </BrowserRouter>
)
