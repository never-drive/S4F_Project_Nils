import React, { useState, useEffect } from 'react';

const MapOne = () => {
  const [bottomPositions, setBottomPosition] = useState(50);
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === ' ') {
        jump();
      }
      if (e.key === 'v') {
        enterFullScreen();
      }
      if (e.key === 'Enter') {
        enterFullScreen();
        startgame();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, );

  const jump = () => {
    // Figur hochsetzen
    // warten (z.B. 10 ms)
    // Figur runtersetzen (entscheiden wie tier runter)
    const figur = document.querySelector('#Spielfigur');
    let leftPositions = figur.offsetLeft;
    let rightPositions = leftPositions + figur.offsetWidth;
    const blocks = document.querySelectorAll('.block');

    let blockPositions = [];
    let blockdiff = [];
    
    const hitbox = () => {
      if (blockPositions.some((position) => screenheight-position.top === bottomPositions && position.left <= rightPositions && position.right >= leftPositions)) {
        return true;
      } else {
        return false; 
      }
    };
    blocks.forEach((block) => {
      let topPosition = block.offsetTop;
      let bottomPosition = topPosition + block.offsetHeight;
      let leftPosition = block.offsetLeft;
      let rightPosition = leftPosition + block.offsetWidth;
      const positionObj = {
        top: topPosition,
        bottom: bottomPosition,
        left: leftPosition,
        right: rightPosition,
      };
  
      blockPositions.push(positionObj);

      blockdiff.push(rightPosition - leftPosition);
    });
    function fall() {
      setTimeout(() => {
       
      }, 1000);
    }
  
    let screenheight = window.screen.height;
    if (hitbox()) {
      setBottomPosition((prevBottomPosition) => prevBottomPosition + 150);
    } 
  };

  function enterFullScreen() {
    let element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }

  const startgame = () => {
    const blocks = document.querySelectorAll('.block');
  
    blocks.forEach((block) => {
      let currentPosition = parseFloat(block.offsetLeft);
      const animateBlock = () => {
        currentPosition -= 1; 
        block.style.left = `${currentPosition}px`;
  
        if (currentPosition > -block.offsetWidth) {
          requestAnimationFrame(animateBlock);
        }
      };
  
      animateBlock();
    });
  };
  
  return (
    <div id="maponediv">
      <div id="Spielfigur" style={{ bottom: `${bottomPositions}px` }}></div>
      <div id="ground" className="block" style={{ width: '2000px' }}></div>
      <div id="block1" className="block"></div>
      <div id="block2" className="block"></div>
      
    </div>
  );
};

export { MapOne };
