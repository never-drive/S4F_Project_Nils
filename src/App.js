import React from 'react';
import { TiHomeOutline } from 'react-icons/ti';
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

const Startpage = () => {
	return (
		<div id='startdiv'>
			<Link to='/choose' onClick={enterFullscreen}><button className='yellowbtn' >Start</button></Link>
        	<Link to='/login' onClick={enterFullscreen}><button className='yellowbtn'>Log In</button></Link>
			<Link to='/highscore' onClick={enterFullscreen}><button className='yellowbtn'>Highscores</button></Link>
		</div>
	)
};

const Choosingpage = () => {
	
	return (
		<div id='gamechoosediv'>
				<p className='title'>Choose your Map</p>
				<div id='mapdivgrid'>
					<div className='mapdiv'>
						<p className='maptitle'><Link to='/mapone' onClick={enterFullscreen}>Map 1</Link></p>
					</div>
					<div className='mapdiv'>
						<p className='maptitle'>Map 2</p>
					</div>
					<div className='mapdiv'>
						<p className='maptitle'>Map 3</p>
					</div>
					<div className='mapdiv'>
						<p className='maptitle'>Map 4</p>
					</div>
				</div>
				<Link to='/'><button className='yellowbtn'><TiHomeOutline /></button></Link>
				
		</div>
	)
};
export { Startpage, Choosingpage } ;