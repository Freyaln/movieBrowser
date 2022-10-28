import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import App from './App';
import Homepage from './layout/Homepage/Homepage';
import Movies from './layout/Movies/Movies/Movies';
import Series from './layout/Series/Series/Series';
import Navbar from './components/organisms/Navbar/Navbar';
import Search from "./layout/Search/Search";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Homepage />} />
        <Route path="/:linkParam" element={<Movies />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/series" element={<Series />} />
        <Route path="/series/popular" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
