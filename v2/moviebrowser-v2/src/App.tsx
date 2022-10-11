import React from 'react';
import './App.scss';
import Homepage from './layout/Homepage/Homepage';
import Navbar from './components/organisms/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <section className="__body">
      <Homepage />
    </section>
  );
}

export default App;
