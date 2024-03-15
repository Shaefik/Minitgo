import React from 'react';
import './App.css'

import Navbar from '../../sample/src/Components/Navbar';
import Footer from '../../sample/src/Components/Footer';
import Cards from '../../sample/src/Components/Cards';
import Text from '../../sample/src/Components/Text';
import Carousel from '../../sample/src/Components/Carousel';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Cards />
        <Text/>
        <Carousel/>
        <Footer/>
    </div>
  );
}

export default App;
