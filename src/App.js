import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './components/Home/Category';
import Home from './components/Home/Home';
import SellProducts from './components/Home/SellProducts';
import SellScrap from './components/Home/SellScrap';
import Shop from './components/Home/Shop';
setBasePath('/path/to/shoelace/dist');
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.0/cdn/');


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/sellproduct' element={<SellProducts />} ></Route>
        <Route path='/list-scrap' element={<SellScrap />}></Route>
        <Route path='/category' element={<Category />}></Route>
      </Routes>
    </>
  );
}

export default App;
