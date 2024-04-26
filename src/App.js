import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import React, { createContext, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import PageNotFound from './PageNotFound';
import AdminSignIn from './components/Admin/AdminSignIn';
import AdminSignUp from './components/Admin/AdminSignUp';
import Menu from './components/Admin/Menu';
import Category from './components/Home/Category';
import Home from './components/Home/Home';
import MyProfile from './components/Home/MyProfile';
import OurBrand from './components/Home/OurBrand';
import SellProducts from './components/Home/SellProducts';
import SellScrap from './components/Home/SellScrap';
import Shop from './components/Home/Shop';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/ui/Footer';
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.0/cdn/');
// Create the UserContext
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const shouldHideNavbarFooter =
    location.pathname.startsWith('/dashboard') ||
    location.pathname.startsWith('/admin') ||
    location.pathname.startsWith('/signUp');

  // You may need to declare these states if they are used in your Navbar and Footer components
  const [hideNavbar, setHideNavbar] = useState(false);
  const [hideFooter, setHideFooter] = useState(false);

  useEffect(() => {
    const isDashboardRoute = location.pathname.startsWith('/dashboard');
    const isAdminRoute = location.pathname.startsWith('/admin');
    const isAdminSign = location.pathname.startsWith('/signUp');
    setHideNavbar(isDashboardRoute || isAdminRoute || isAdminSign);
    setHideFooter(isDashboardRoute || isAdminRoute || isAdminSign);

    return () => {
      setHideNavbar(false); 
      setHideFooter(false); 
    };
  }, [location]);



  return (

    <UserContext.Provider value={{ user, setUser }}>
      <>
        {!shouldHideNavbarFooter && <Navbar />}
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/sellproduct' element={<SellProducts />} />
          <Route path='/list-scrap' element={<SellScrap />} />
          <Route path='/category' element={<Category />} />
          <Route path='/ourbrand' element={<OurBrand />} />
          <Route path='/profile' element={<MyProfile />} />
          {/* admin start */}
          <Route path='/dashboard' element={<AdminSignIn />} />
          <Route path='/signUp' element={<AdminSignUp />} />
          <Route path='/adminHome' element={<Menu />} />
          {/* admin end */}
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        {!shouldHideNavbarFooter && <Footer />}
      </>
    </UserContext.Provider>
  );
}

export default App;
