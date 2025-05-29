import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToHashElement from './Pages/ScrollToHashElement';

const App = () => {
  return (
    <>
      <ScrollToHashElement />

      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
