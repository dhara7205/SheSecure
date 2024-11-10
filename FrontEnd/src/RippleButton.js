import React, { useState } from 'react';
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

  return (
    <div
      className="ripple-button-container"
      onClick={(event) => {
        createRipple(event);  
        if (onClick) onClick(event);  
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
