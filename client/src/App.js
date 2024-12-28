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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SmoothScroll>
        <section id="home" className="h-screen">
          <Home />
        </section>
        <section id="aisha" className="h-screen">
          <Aisha />
        </section>
        <section id="about" className="h-screen">
          <About />
        </section>
        <section id="portfolio" className="h-screen">
          <Portfolio />
        </section>
        <section id="services" className="h-screen">
          <Services />
        </section>
        <section id="contact" className="h-screen">
          <Contact />
        </section>
      </SmoothScroll>
      <Footer />
    </div>
  );
}

export default App;
