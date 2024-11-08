import React, { useState, useEffect } from 'react';
import './RippleButton.css';

function RippleButton({ children, onClick }) {

  
  const [ripples, setRipples] = useState([]);

  const createRipple = (event) => {
    const screen = event.currentTarget;
    const rect = screen.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    
    const newRipple = {
      id: Date.now(),
      style: {
        width: size,
        height: size,
        top: y,
        left: x,
      },
    };

    
    setRipples((prevRipples) => [...prevRipples, newRipple]);

    
    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.filter(ripple => ripple.id !== newRipple.id));
    }, 1500);
  };

  // Function to keep adding ripples for a set duration (e.g., 3 seconds)
  useEffect(() => {
    let interval;

    const handleClick = () => {
      createRipple();

      // Start adding ripples every 200ms for 3 seconds
      const duration = 3000; // Duration to keep creating ripples
      const intervalTime = 200; // Time between each ripple creation

      interval = setInterval(() => {
        createRipple();
      }, intervalTime);

      // Stop adding ripples after the specified duration
      setTimeout(() => {
        clearInterval(interval);
      }, duration);
    };

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div 
    
      className="fullscreen-ripple"
      onClick={(event) => {
        createRipple(event);
        onClick && onClick(event);
        //alert("Hello");
        const audio = new Audio('sound.mp3');
        audio.play();
        window.location.href = "tel:+918160050770";
      }}
    >
      {ripples.map((ripple) => (
        <span key={ripple.id} className="ripple" style={ripple.style}></span>
      ))}
      <button className="ripple-button">
        {children}
      </button>

      
    </div>
  );
}

export default RippleButton;
