import React, { useState, useEffect } from 'react';

export default function TypewriterEffect({ text }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        const currentChar = text[currentIndex];
        setDisplayText((prevState) => prevState + currentChar);
        setCurrentIndex((prevState) => prevState + 1);
      } else {
        // Animation completed, reset to start the loop
        setDisplayText('');
        setCurrentIndex(0);
      }
    }, 100); // Adjust the speed of typing animation by changing the delay

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, currentIndex]);

  return (
    <span>
      {displayText}
    </span>
  );
}
