import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index-3"
import About from "./pages/about/about"
import Single from "./pages/single/tour-details"
import Login from "./pages/login/login"
import Register from "./pages/register/register"
import Master from "./layouts/master"
import Profile from "./pages/profile/mainprofile"
import Product from "./pages/products/allproduct"


import Booking from "./pages/booking/booking"
// import Profile from "./pages/profile/mainprofile"
import ProfileInfo from "./pages/profile/profile"
import Profiletour from "./pages/profile/tour-booking"
import Contact from './pages/contact/contact';

import Bookingconfirm from './pages/bookingconfirm/bookingconfirm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master />}>
          <Route index path="/" element={<Home />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/single/:id" element={<Single />} />
          <Route path="/bookingconfirm/:id" element={<Bookingconfirm />} />
          <Route path="/myprofile" element={<Profile />}>
            <Route index element={<ProfileInfo />} /> {/* Use "index" to match the default sub-route */}
            <Route path="booking" element={<Profiletour />} />


          </Route>
          <Route path="login" element={<Login />} />
        </Route>


        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
