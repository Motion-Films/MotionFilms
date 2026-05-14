import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './pages/App';
import Portfolio from './pages/portfolio';
import Orcamento from './pages/orcamento';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LenisProvider from './elements/lenis';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LenisProvider />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contato" element={<Orcamento />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
