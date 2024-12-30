import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import chatGPTLogo from '../assets/chatGPTLogo.png';
import * as styles from '../styles/navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu
  const location = useLocation(); // useLocation hook at the top level
  const navigate = useNavigate(); // useNavigate for programmatic navigation

  useEffect(() => {
    if (location.pathname !== "/") {
      setShowHeader(true);
    }
    else{
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.5;
      const scrolledPastThreshold = window.scrollY > scrollThreshold;

      if (scrolledPastThreshold || window.scrollY === 0) {
        setScrolled(scrolledPastThreshold);
        setShowHeader(window.scrollY > 0); // Show header if scrolled past top
      } else {
        setScrolled(false);
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }
  }, []);

  const scrollToTop = () => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      navigate("/");
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`${styles.navbarMaxWidth} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={`${styles.navbarContainer}`}>
        <div className={styles.imgContainer}>
          <div className={`${styles.headdd} ${showHeader ? '' : styles.headHidden}`}>
            <h1 onClick={scrollToTop}>श्रेय</h1>
          </div>
        </div>
        <div className={styles.navbar}>
          {/* Desktop Menu */}
          <ul className={`${styles.desktopMenu}`}>
            <li><a href={"Experience"} className={(location.pathname == "/Experience"? styles.red:styles.white)}>Experience</a></li>
            <li><a href="Projects" className={(location.pathname == "/Projects"? styles.red:styles.white)}>Projects</a></li>
            <li><a href="CP" className={(location.pathname == "/CP"? styles.red:styles.white)}>CP</a></li>
            <li><a href="Contact" className={(location.pathname == "/Contact"? styles.red:styles.white)}>Connect</a></li>
          </ul>
          <a href="talk">
          <img src={chatGPTLogo}/>
          </a>

          {/* Mobile Menu Button */}
          <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
            <span>&#8230;</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenuOverlay} ${mobileMenuOpen ? styles.overlayActive : ''}`}>
        <ul>
          <li><a href="https://in.linkedin.com/in/shreyg-upta">Experience</a></li>
          <li><a href="https://github.com/shreyg-upta">Projects</a></li>
          <li><a href="https://codeforces.com/profile/shrey71">CP</a></li>
          <li><a href="https://detrace.systems/contact">Connect</a></li>
        </ul>
      </div>
    </div>
  );
}
