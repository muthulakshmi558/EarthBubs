// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PampersPage from './pages/PampersPage';
import BoysFashion from './pages/BoysFashion'
import GirlsFashion from "./pages/GirlsFashion"
import SoapPage from "./pages/Soap"
import StrollerPage from "./pages/Stroller"
import BottlePage from "./pages/Bottle"
import OfferPage from "./pages/Offer"
import AboutPage from "./pages/About"
import ContactPage from "./pages/Contact"
import CheckoutPage from "./pages/CheckoutPage"
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
import OrderPage from './pages/OrderCompletePage';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/products/pampers" element ={<PampersPage />} />
        <Route path ="/products/boys-fashion" element ={<BoysFashion />} />
        <Route path ="/products/girls-fashion" element ={<GirlsFashion />} />
        <Route path ="/products/soap" element ={<SoapPage />} />
        <Route path ="/products/stroller" element ={<StrollerPage />} />
        <Route path ="/products/bottle" element ={<BottlePage />} />
        <Route path ="/products/offer" element ={<OfferPage />} />
        <Route path ="/products/checkout" element ={<CheckoutPage />} />
        <Route path ="/about" element ={<AboutPage />} />
         <Route path ="/contact" element ={<ContactPage />} />
         <Route path ="/cart" element ={<CartPage />} />
        <Route path ="/payment" element ={<PaymentPage />} />
         <Route path ="/order" element ={<OrderPage />} />









      </Routes>
    </>
  );
}

export default App;
