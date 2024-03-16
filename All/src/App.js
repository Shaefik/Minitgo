import React from 'react';
import Media from '/home/use/Desktop/new_project/All/src/Components/Media.jsx';
import Navbar from '/home/use/Desktop/new_project/All/src/Components/Navbar.jsx';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import ProfileSettings from '/home/use/Desktop/new_project/All/src/Components/ProfileSettings.jsx';
import ReturnPolicy from '/home/use/Desktop/new_project/All/src/Components/ReturnPolicy.jsx';
import Product from '/home/use/Desktop/new_project/All/src/Components/ProductPage/Product.jsx';
import Cart from '/home/use/Desktop/new_project/All/src/Components/Cart/Cart.jsx'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/profilesettings' Component={ProfileSettings}  />
    <Route path='/media' Component={Media} />   
    <Route path='/product' Component={Product} />
    <Route path='/cart' Component={Cart} />
    <Route path='/returnpolicy' Component={ReturnPolicy} />  
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
