import React, { useState, useEffect } from 'react';
import * as styles from '../styles/cursor.module.css';
import { motion } from 'framer-motion';

function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      checkCursorPointer(e);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  useEffect(() => {
    let timer;
    if (!isPointer && cursorVariant === 'text') {
      timer = setTimeout(() => {
        setCursorVariant('default');
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [isPointer, cursorVariant]);

  const variants = {
    default: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      height: 20,
      width: 20,
      mixBlendMode: 'difference',
    },
    text: {
      x: mousePosition.x - 55,
      y: mousePosition.y - 55,
      height: 100,
      width: 100,
      backgroundColor: 'white',
      mixBlendMode: 'difference',
    },
  };

  const checkCursorPointer = (e) => {
    const element = document.elementFromPoint(e.clientX, e.clientY);
    if (element) {
      const style = window.getComputedStyle(element);
      const cursor = style.cursor;
      if (cursor === 'pointer' || cursor === 'help') {
        setCursorVariant('text');
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    }
  };

  return (
    <motion.div className={styles.cursor} variants={variants} animate={cursorVariant}>
      <div className={styles.cursor__ball} />
    </motion.div>
  );
}

export default Cursor;
