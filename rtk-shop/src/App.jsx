import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CakeView from '../../rtk-shop/src/features/cake/CakeView';
import IceCreamView from '../../rtk-shop/src/features/icecream/IceCreamView';
import UserView from '../../rtk-shop/src/features/user/UserView';
import CartView from './features/cart/CartView';
import Home from './Home';
import Nav from './Navbar';
import Header from './Navbar';
import './navbar.css';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <div className="header">
            <Nav />
          </div>
          <div className="menu">menu</div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cakes" element={<CakeView />} />
              <Route path="/icecream" element={<IceCreamView />} />
              <Route path="/cart" element={<CartView />} />
              {/* Add more routes here */}
            </Routes>
          </div>
          <div className="footer">footer</div>
        </div>
      </Router>
    </>
  );
}

export default App;
