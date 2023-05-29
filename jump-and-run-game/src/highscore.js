import React from 'react';
import { Link } from 'react-router-dom';

function enterFullscreen() {
	const element = document.documentElement;

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

const Highscorepage = () => {
	return (
		<div id='highscorediv'>
		 <h1>Highscores</h1>
            <Link to='/' onClick={enterFullscreen}>Go to Startpage</Link>
		</div>
	)
};


export { Highscorepage } ;