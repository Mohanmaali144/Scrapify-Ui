import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './components/Home/Category';
import Home from './components/Home/Home';
import OurBrand from './components/Home/OurBrand';
import SellProducts from './components/Home/SellProducts';
import SellScrap from './components/Home/SellScrap';
import Shop from './components/Home/Shop';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar/Navbar';

// Create the UserContext
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/sellproduct' element={<SellProducts />} />
          <Route path='/list-scrap' element={<SellScrap />} />
          <Route path='/category' element={<Category />} />
          <Route path='/ourbrand' element={<OurBrand />} />
        </Routes>
      </>
    </UserContext.Provider>
  );
}

export default App;
