import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../../sample/src/Components/Navbar';
import Footer from '../../sample/src/Components/Footer';
import Cards from '../../sample/src/Components/Cards';
import Text from '../../sample/src/Components/Text';
import Carousel from '../../sample/src/Components/Carousel';


function HomePage() {
  
  return (
    <div>
      <Cards />
      <Text />
      <Carousel />
     
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <hr></hr>
        <Routes>
          <Route path="/" element={<HomePage />} />
         
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
