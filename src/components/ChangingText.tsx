import React, { useState, useEffect } from 'react';

export const ChangingText = () => {
  const texts = ["Salaam!", "Hello!", "Namaste!", "Hola!"];
  const [currentText, setCurrentText] = useState("");  // Displayed text
  const [currentIndex, setCurrentIndex] = useState(0);  // Current text index
  const [letterIndex, setLetterIndex] = useState(0);  // Current letter index
  const [isTyping, setIsTyping] = useState(true); // To track typing state

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        if (letterIndex < texts[currentIndex].length) {
          setCurrentText((prevText) => prevText + texts[currentIndex][letterIndex]);
          setLetterIndex((prevLetterIndex) => prevLetterIndex + 1);
        } else {
          // Stop typing and wait for 1 second
          setIsTyping(false);
          clearInterval(typingInterval); // Clear typing interval
          
          // Wait for 1 second before moving to the next text
          setTimeout(() => {
            setCurrentText(""); // Clear text
            setLetterIndex(0); // Reset letter index for the new text
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to next text
            setIsTyping(true); // Start typing the new text
          }, 1000); // 1 second delay
        }
      }
    }, 100); // Typing speed (100ms between letters)

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, [letterIndex, currentIndex, isTyping, texts]);

  return (
    <div>
      <h1 className='text-2xl'>{currentText} Welcome to my website</h1>
    </div>
  );
}
