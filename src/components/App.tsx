import React, { useState, useEffect } from "react";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import "../App.css";

function App() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const [isMenuOpen, setIsMenuOpen] = useState(false); //Headers nav mobile

  const handleWindowSizeWidth = () => setInnerWidth(window.innerWidth);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeWidth);
  });

  return (
    <div className="page">
      {innerWidth < 650 ? <HeaderMobile isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/> : <Header />}
      <main className="page__container">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
