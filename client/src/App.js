import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import Aisha from './pages/Aisha';
import About from './features/About/About'; // About page
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';
import WhyHalifax from './features/About/WhyHalifax'; // WhyHalifax page within About folder

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-x-hidden bg-gray-900">
        <Navbar />
        <Routes>
          {/* Single-Page Application Sections */}
          <Route
            path="/"
            element={
              <SmoothScroll>
                <section
                  id="home"
                  className="min-h-screen py-12 px-4 md:px-8 transition-all duration-700 ease-in-out"
                >
                  <Home />
                </section>
                <section
                  id="aisha"
                  className="min-h-screen py-12 px-4 md:px-8 transition-all duration-700 ease-in-out"
                >
                  <Aisha />
                </section>
                <section
                  id="about"
                  className="min-h-screen py-12 px-4 md:px-8 transition-all duration-700 ease-in-out"
                >
                  <About />
                </section>
                <section
                  id="services"
                  className="min-h-screen py-12 px-4 md:px-8 transition-all duration-700 ease-in-out"
                >
                  <Services />
                </section>
                <section
                  id="portfolio"
                  className="min-h-screen py-12 px-4 md:px-8 transition-all duration-700 ease-in-out"
                >
                  <Portfolio />
                </section>
                <section
                  id="contact"
                  className="min-h-screen py-12 px-4 md:px-8 transition-all duration-700 ease-in-out"
                >
                  <Contact />
                </section>
              </SmoothScroll>
            }
          />
          {/* Dedicated Why Halifax Page */}
          <Route
            path="/why-halifax"
            element={
              <div className="animate-fadeIn">
                <WhyHalifax />
              </div>
            }
          />
          {/* Dedicated Contact Page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
