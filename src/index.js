import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Product from './Product';
import Service from './Service';
import Aboutus from './Aboutus';
import Header from './Header';
import Testimonial2 from './Testimonial2';
import Productpage from './Productpage';
import Blog from './Blog';
import Contact from './Contact';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <Header/>
          <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <Aboutus/> } />
        <Route path="/testimonial" element={ <Testimonial2/> } />
        <Route path="/product" element={ <Productpage/> } />
        <Route path="/blog" element={ <Blog/> } />
        <Route path="/contact" element={ <Contact/> } />

        
      </Routes>
  </BrowserRouter>
  </>
);

