import React, { useState, useEffect } from 'react';

const MapOne = () => {

  let blockPositions;
  let bottomPositions;
  let setBottomPosition;
  let rightPositions;
  let leftPositions;
  let figur;
  let blocks;

  function fall() {
    setTimeout(() => {
    
    }, 1000);
  };

  const hitbox = () => {
    // calculate  positions
    figur = document.querySelector('#Spielfigur');
    leftPositions = figur.offsetLeft;
    rightPositions = leftPositions + figur.offsetWidth;

    let screenheight = window.screen.height;

    return calculateBlockPositions().some((position) => 
    screenheight-position.top === bottomPositions && 
      position.left <= rightPositions && 
      position.right >= leftPositions);
  };

  const calculateBlockPositions = () => {
    blockPositions = [];
    blocks = document.querySelectorAll('.block');
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
    });
    return blockPositions;
  };

  const jump = () => {
    if (!hitbox()) return;

    // Figur hochsetzen
    setBottomPosition(prevBottomPosition => prevBottomPosition + 150);
  };

  function enterFullScreen() {
    let element = document.documentElement;
    if (element.requestFullscreen)
      element.requestFullscreen();
    else if (element.mozRequestFullScreen)
      element.mozRequestFullScreen();
    else if (element.webkitRequestFullscreen)
      element.webkitRequestFullscreen();
    else if (element.msRequestFullscreen)
      element.msRequestFullscreen();
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

  const handleKeyDown = (e) => {
    switch (e.key) {
      case ' ': 
        jump();
        break;
      case 'v': 
        enterFullScreen();
        break;
      case 'Enter':
      default:
        enterFullScreen();
        startgame();
        break;
    }
  };

  [bottomPositions, setBottomPosition] = useState(50);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

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
