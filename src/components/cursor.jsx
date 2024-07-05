import React, { useState, useEffect, useRef } from 'react';
import * as styles from '../styles/cursor.module.css';
import { motion } from 'framer-motion';

function Cursor() {
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isPointer, setIsPointer] = useState(false);
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  const requestRef = useRef(null);

  const lerp = (start, end, factor) => start + (end - start) * factor;

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
      checkCursorPointer(e);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let timer;
    if (!isPointer && cursorVariant === 'text') {
        setCursorVariant('default');
    }
  }, [isPointer, cursorVariant]);

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

  const smoothCursor = () => {
    setCurrentPosition(prevPosition => ({
      x: lerp(prevPosition.x, targetPosition.x, 0.4),
      y: lerp(prevPosition.y, targetPosition.y, 0.4)
    }));

    requestRef.current = requestAnimationFrame(smoothCursor);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(smoothCursor);
    return () => cancelAnimationFrame(requestRef.current);
  }, [targetPosition]);

  const variants = {
    default: {
      height: 20,
      width: 20,
      mixBlendMode: 'difference',
      transition: { duration: 0.25, ease: 'easeInOut' } // Smooth transition over 1 second

    },
    text: {
      height: 100,
      width: 100,
      backgroundColor: 'white',
      mixBlendMode: 'difference',
      transition: { duration: 0.25, ease: 'easeInOut' } // Smooth transition over 1 second
    },
  };

  return (
    <motion.div
      className={styles.cursor}
      variants={variants}
      animate={cursorVariant}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        transform: `translate3d(${currentPosition.x - (cursorVariant === 'text' ? 53.5 : 13.5)}px, ${currentPosition.y - (cursorVariant === 'text' ? 53.5 : 13.5)}px, 0)`
      }}
    >
      <div className={styles.cursor__ball} />
    </motion.div>
  );
}

export default Cursor;
