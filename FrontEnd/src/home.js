import React, { useState} from 'react';
import './home.css';
import RippleButton from './RippleButton'; 

function Home() {
  const [showStopButton, setShowStopButton] = useState(false);
  var audio = new Audio('sound.mp3');

const handleRippleClick = () => {
    setShowStopButton(true); 
    audio.play(); // Play and catch errors if any
    console.log('Ripple Button Clicked!');
};

const handleStopClick = () => {
    audio.pause();
    setShowStopButton(false); 
    console.log('Stop Button Clicked!');
};
  return (
    
    <div className="home">
      
      <RippleButton onClick={handleRippleClick}>
        EMERGENCY
      </RippleButton>
      {showStopButton && (
      <button className='stop-button' onClick={handleStopClick} >Stop</button>
      )}
    </div>
  );
}

export default Home;