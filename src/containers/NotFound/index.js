import React from 'react';
import Main from '../../components/Main/index';
import './style.scss';

const NotFound = () => {
	return (
		<div className='home'>
			<Main />
			<div className='home__notfound'>
				<h1>Pagina no encontrada</h1>
			</div>
		</div>
	);
};

export default NotFound;
