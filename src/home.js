import React from 'react';
import RippleButton from './RippleButton'; 


function Home() {
  return (
    <div className="home">
      
      <RippleButton onClick={() => console.log('Ripple Button Clicked!')}>
        EMERGENCY
      </RippleButton>
    </div>
  );
}

export default Home;