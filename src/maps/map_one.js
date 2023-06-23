import React, { useState, useEffect } from 'react';

function MapOne() {

  let bottomPosition;
  let setBottomPosition;

  const hitBlock = () => {
    // Position der Figur berechnen
    let figur = document.querySelector('#Spielfigur');
    let leftPos = figur.offsetLeft;
    let rightPos = leftPos + figur.offsetWidth;

    // Position der Blöcke berechnen
    let screenheight = window.screen.height;
    let blockPositions = calculateBlockPositions();

    // true, falls Figur im Bereich eines anderen Blocks ist
    return blockPositions.some((position) => 
      screenheight-position.top === bottomPosition && 
      position.left <= rightPos && 
      position.right >= leftPos);
  };

  const calculateBlockPositions = () => {
    let blockPositions = [];
    let blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
      let top = block.offsetTop;
      let left = block.offsetLeft;
      const positionObj = {
        top: top,
        bottom:  top + block.offsetHeight,
        left: left,
        right: left + block.offsetWidth,
      };

      blockPositions.push(positionObj);
    });
    return blockPositions;
  };

  const jump = () => {
    if (!hitBlock()) return;

    // Figur hochsetzen
    setBottomPosition(pos => pos + 150);
    
    // Figur runtersetzen nach einer kurzen Wartezeit
    setTimeout(() => {
      setBottomPosition(pos => pos - 150);
    }, 100);
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

  const animateBlocks = () => {
    let blocks = document.querySelectorAll('.block');

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
        animateBlocks();
        break;
    }
  };

  [bottomPosition, setBottomPosition] = useState(50);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div id="maponediv">
      <div id="Spielfigur" style={{ bottom: `${bottomPosition}px` }}></div>
      <div id="ground" className="block" style={{ width: '2000px' }}></div>
      <div id="block1" className="block"></div>
      <div id="block2" className="block"></div>
      
    </div>
  );
};

export { MapOne };
