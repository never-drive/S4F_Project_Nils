import React from 'react';
import { Link } from 'react-router-dom';



const Highscorepage = () => {
	return (
		<div id='highscorediv'>
		 <h1>Highscores</h1>
            <Link to='/'>Go to Startpage</Link>
		</div>
	)
};


export { Highscorepage } ;