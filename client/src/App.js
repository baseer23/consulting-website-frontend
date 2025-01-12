// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import Aisha from './pages/Aisha';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-gray-900">
      <Navbar />
      <SmoothScroll>
        <section id="home" className="min-h-screen py-12 px-4 md:px-8">
          <Home />
        </section>
        <section id="aisha" className="min-h-screen py-12 px-4 md:px-8">
          <Aisha />
        </section>
        <section id="about" className="min-h-screen py-12 px-4 md:px-8">
          <About />
        </section>
        <section id="services" className="min-h-screen py-12 px-4 md:px-8">
          <Services />
        </section>
        <section id="portfolio" className="min-h-screen py-12 px-4 md:px-8">
          <Portfolio />
        </section>
        <section id="contact" className="min-h-screen py-12 px-4 md:px-8">
          <Contact />
        </section>
      </SmoothScroll>
      <Footer />
    </div>
  );
}

export default App;
