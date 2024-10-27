import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import About from './Components/About';
import Shop from './Components/Shop';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import Login from './Login/Login';
import Signup from './Login/Signup';
import Error from './Components/Error';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Navbar />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;