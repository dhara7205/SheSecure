import React from "react";
import './learning.css';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';
import image7 from './image7.png';
import image8 from './image8.png';
import image9 from './image9.png';

function Learning() {
    return (
        <div className="learning-grid-container">
            <a href="https://www.youtube.com/watch?v=pndPbpHLpos" className="learning-grid-item" target="_blank" rel="noopener noreferrer">
                <img src={image1} alt="Video 1" />
            </a>
            <a href="https://www.youtube.com/watch?v=jAh0cU1J5zk" className="learning-grid-item" target="_blank" rel="noopener noreferrer">
                <img src={image2} alt="Video 2" />
            </a>
            <a href="https://www.youtube.com/watch?v=KVpxP3ZZtAc" className="learning-grid-item" target="_blank" rel="noopener noreferrer">
                <img src={image3} alt="Video 3" />
            </a>
            <a href="https://www.youtube.com/watch?v=k9Jn0eP-ZVg" className="learning-grid-item" target="_blank" rel="noopener noreferrer">
                <img src={image4} alt="Video 4" />
            </a>
            <a href="https://www.youtube.com/watch?v=bErptxD1jho" className="learning-grid-item" target="_blank" rel="noopener noreferrer">
                <img src={image5} alt="Video 5" />
            </a>
            <a href="https://www.youtube.com/watch?v=MF7reW-hkJE" className="learning-grid-item" target="_blank" rel="noopener noreferrer">
                <img src={image6} alt="Video 6" />
            </a>
            <a href="https://www.youtube.com/watch?v=v5sIxCDmGLs" className="learning-grid-item" target="_blank" rel="noopener noreferrer">
                <img src={image7} alt="Video 7" />
            </a>
            <a href="https://www.youtube.com/watch?v=q1pBBRi3XF8" className="learning-grid-item" target="_blank" rel="noopener noreferrer">
                <img src={image8} alt="Video 8" />
            </a>
            <a href="https://www.youtube.com/watch?v=vwtZyR_99lY" className="learning-grid-item" target="_blank" rel="noopener noreferrer">
                <img src={image9} alt="Video 9" />
            </a>
        </div>
    );
}

export default Learning;
