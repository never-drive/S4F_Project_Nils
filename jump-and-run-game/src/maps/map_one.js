import React, { useState, useEffect } from 'react';



const MapOne = () => {
  const [bottomPositions, setBottomPosition] = useState(50);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === ' ') {
        jump();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, );

  const jump = () => {
    const blocks = document.querySelectorAll('.block');
    let blockPositions = [];
  
    blocks.forEach((block) => {
      let topPosition = block.offsetTop;
      let bottomPosition = topPosition + block.offsetHeight;
  
      const positionObj = {
        top: topPosition,
        bottom: bottomPosition
      };
  
      blockPositions.push(positionObj);
    });
  
    let screenheight = window.screen.height;
    if (blockPositions.some((position) => screenheight-position.top=== bottomPositions)) {
      setBottomPosition((prevBottomPosition) => prevBottomPosition + 150);
    } else {
      console.log(bottomPositions);
      console.log(blockPositions);
      console.log(screenheight);
    }
  };
  
  return (
    <div id="maponediv">
      <div
        id="Spielfigur"
        style={{ bottom: `${bottomPositions}px` }}
      ></div>
      <div id="ground" className="block" style={{ width: '100%' }}></div>
      
    </div>
  );
};

export { MapOne };
