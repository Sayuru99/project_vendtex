import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/Navbar';
import Product from './pages/ProductItem';
import Footer from './components/Footer';
import ContactUs from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <TransitionGroup>
                  <CSSTransition
                    key="home"
                    classNames="fade"
                    timeout={300}
                  >
                    <Home />
                  </CSSTransition>
                </TransitionGroup>
              }
            />
            <Route
              path="/about"
              element={
                <TransitionGroup>
                  <CSSTransition
                    key="about"
                    classNames="fade"
                    timeout={300}
                  >
                    <About />
                  </CSSTransition>
                </TransitionGroup>
              }
            />
            <Route
              path="/contact"
              element={
                <TransitionGroup>
                  <CSSTransition
                    key="contact"
                    classNames="fade"
                    timeout={300}
                  >
                    <ContactUs />
                  </CSSTransition>
                </TransitionGroup>
              }
            />
            <Route
              path="/product/:machineName"
              element={
                <TransitionGroup>
                  <CSSTransition
                    key="product"
                    classNames="fade"
                    timeout={300}
                  >
                    <Product />
                  </CSSTransition>
                </TransitionGroup>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
