import React, { useState, useEffect, useRef } from 'react';
import * as styles from "./AboutMe.module.css";
import Footer from "./components/footer.jsx";
import 'smoothscroll-polyfill';
import Navbar from "./components/navbar.jsx";

window.__forceSmoothScrollPolyfill__ = true;

function App() {
  const [name, setName] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [typedText, setTypedText] = useState('');
  const emailInputRef = useRef(null);
  const thankYouRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNameInputChange = (e) => {
    setName(e.target.value);
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
    setTimeout(() => {
      inputRef.current.focus();
    }, 2000);
  };

  const typeText = (text) => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText((prevText) => prevText + text[index]);
      index++;
      if (index === text.length) clearInterval(intervalId);
    }, 100); // Adjust typing speed as needed
  };

  const handleNameKeyPress = (e) => {
    if (e.key === 'Enter' && name.trim() !== '') {
      setShowEmailInput(true);
      typeText("What is your Email ID?");
      setTimeout(() => {
        emailInputRef.current.focus();
      }, 300);
    }
  };

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailKeyPress = (e) => {
    if (e.key === 'Enter' && email.trim() !== '') {
      setShowThankYou(true);
      emailInputRef.current.blur();
      submitData();
      setTimeout(() => {
        thankYouRef.current.focus();
      }, 300);
    }
  };

  const submitData = () => {
    const apiEndpoint = 'https://your-api-endpoint.com/submit';

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
      <Navbar className={styles.navi}/>
      <div className={styles.firstpage}>
        {/* Rest of your code */}
        <div className={styles.textBox}>
          <p>
            {/* Your existing content */}
            {showEmailInput && (
              <>
                <br /><br/>
                <span>{typedText}</span> {/* Display typed text */}
                <br />
                <input 
                  ref={emailInputRef} 
                  onChange={handleEmailInputChange} 
                  onKeyPress={handleEmailKeyPress}
                  value={email} 
                />
              </>
            )}
            {/* Rest of your code */}
          </p>
        </div>
        {/* Rest of your code */}
      </div>
      <div className={styles.secondPage}>
        {/* Rest of your code */}
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}

export default App;
