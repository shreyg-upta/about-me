import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as styles from '../styles/PleaseOpenInLaptop.module.css';

export default function PleaseOpenInLaptop() {
    const [isMobile, setIsMobile] = useState(false)
 
//choose the screen size 
useEffect (() => {
  if (window.innerWidth < 720) {
      setIsMobile(true)
  } else {
      setIsMobile(false)
  }
})

// create an event listener
    if (!isMobile) {
        return null;
    }
    return (
        <div className={styles.container}>
            <h1>Please open this website in a laptop or desktop for the best experience.</h1>
            <h1>Thank you!</h1>
        </div>
    );
}
