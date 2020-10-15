import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import './style.scss';
import MobileMain from '../MobileMain/index';

const Main = () => {
	const [main, setMain] = useState(false);

	return (
		<Fragment>
			<nav
				className='contenedor main'
				onClick={() => (main ? setMain(false) : setMain(true))}
			>
				<div className='main__menu'>
					<GiHamburgerMenu size='30' />
				</div>
				<Link className='main__home' to='/'>
					<h3>Weather App</h3>
				</Link>
			</nav>
			{main ? <MobileMain /> : ''}
		</Fragment>
	);
};

export default Main;
