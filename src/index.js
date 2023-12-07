import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import NavBarComponent from './components/NavBarComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
    <header className='shadow'>
      <NavBarComponent />
    </header>
      <Routes>
        <Route index path='/home' element={<App />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/blog' element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);