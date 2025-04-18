import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from "./AboutMe.module.css";
import Footer from "./components/footer.jsx";
import 'smoothscroll-polyfill';
import Navbar from "./components/navbar.jsx";
import Cursor from './components/cursor.jsx';
import PleaseOpenInLaptop from './components/PleaseOpenInLaptop.jsx';

window.__forceSmoothScrollPolyfill__ = true;

function AboutMe() {
  const [name, setName] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const emailInputRef = useRef(null);
  const thankYouRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNameInputChange = (e) => {
    setName(e.target.value);
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: window.innerHeight, // Scroll down by the height of the viewport
      behavior: 'smooth' // Add smooth scrolling behavior
    });
    setTimeout(() => {
      inputRef.current.focus(); // Focus on the input field after 2 seconds
    }, 2000);
  };
  const handleClictalk = () => {
    navigate('/talk');
  };
  const handleNameKeyPress = (e) => {
    if (e.key === 'Enter' && name.trim() !== '') {
      setShowEmailInput(true);
      setTimeout(() => {
        emailInputRef.current.focus();
      }, 300); // Adding a slight delay to ensure the input is rendered
    }
  };

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailKeyPress = (e) => {
    if (e.key === 'Enter' && email.trim() !== '') {
      setShowThankYou(true);
      emailInputRef.current.blur(); // Remove focus from the email input field
      submitData();
      setTimeout(() => {
        thankYouRef.current.focus();
      }, 300); // Adding a slight delay to ensure the message is rendered
    }
  };

  const submitData = () => {
    // Replace with your actual API endpoint
    const apiEndpoint = 'https://formsubmit.co/ajax/shreyjee22@gmail.com';

    fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <PleaseOpenInLaptop />
      <Cursor />
      <Navbar className={styles.navi} />
      <div className={styles.firstpage}>
        <img className={styles.bgimage} src="bits-goa.jpeg" alt="background" />
        <div className={styles.content}>
          <div className={styles.contentText}>
            <div className={styles.overlay} />
            <h2>Hi. I am<span className={styles.shrey}> Shrey.</span></h2>
            <p>
              <b>
                I'm a final year undergrad at BITS Pilani - Goa, pursuing BE in
                computer science with a minor in Finance.
              </b>
            </p>
          </div>
          <div className={styles.dp}>
            <img src="dp.jpg" alt="profile" />
          </div>
        </div>
        <button onClick={scrollToBottom}>^</button>
      </div>
      <div className={styles.secondPage}>
        <div className={styles.textBoxnf}>
          <div className={styles.textBox}>
            <p>
              Currently, I'm actively involved in competitive programming and proud
              to be a <span className={styles.mir}>Codeforces Expert with a peak rating of 1771</span>. The thrill of
              problem-solving and the competitive coding environment truly fuels my
              enthusiasm for the field.
              <br />
              <br />
              On the other side, I channel my creativity into crafting compelling
              social media content for various clubs at my college. As a tech
              enthusiast, I am also on a journey to acquire skills in <span className={styles.mir}>full-stack
              development</span>, covering both front-end and back-end technologies.
              <br />
              <br />
              Beyond the tech world, I'm a big fan of <span className={styles.mir}>cricket</span>. Whether I'm playing
              or just watching a match, it's my favorite way to chill and recharge.
              <br />
              <br />
              Let's connect and explore the possibilities together!
              <br />
              <br />
              What is your Name?
              <br />
              <input
                autoFocus
                onChange={handleNameInputChange}
                onKeyPress={handleNameKeyPress}
                value={name}
                ref={inputRef}
              />
              {showEmailInput && (
                <>
                  <br /><br />
                  <span className={styles.showEma}>What is your Email ID?</span>
                  <br />
                  <input
                    ref={emailInputRef}
                    onChange={handleEmailInputChange}
                    onKeyPress={handleEmailKeyPress}
                    value={email}
                  />
                </>
              )}
              {showThankYou && (
                <>
                  <br /><br />
                  <span className={styles.showTha} ref={thankYouRef} tabIndex="-1">Thanks. I'll contact you soon. In the meanwhile you can try talking to ShreyGPT</span>
                  <button className={styles.shreygpt} onClick={handleClictalk}>Talk with ShreyGPT</button>                
                </>
              )}
            </p>
          </div>
          {/* <Footer /> */}
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default AboutMe;
