import React, { useState, useEffect } from "react";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Cursor />
      <section id="Home" className="section">
        <Navbar />
        <Hero />
      </section>
      <section id="About" className="section">
        <Services />
      </section>
      <div id="Projects">
        <Portfolio />
      </div>

      <section id="Contact" className="section">
        {isMobile ? <Navbar /> : <div></div>}
        <Contact />
      </section>
    </div>
  );
};

export default App;
