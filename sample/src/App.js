import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../../sample/src/Components/Navbar';
import Feed from '../../sample/src/Components/Feed';
import Footer from '../../sample/src/Components/Footer';
import Cards from '../../sample/src/Components/Cards';
import Text from '../../sample/src/Components/Text';
import Carousel from '../../sample/src/Components/Carousel';
import Sample from './Components/Sample';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/all" element={<Sample />} />
        </Routes>
        <Cards />
        <hr />
        <Text />
        <hr />
        <Carousel />
        <hr />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
