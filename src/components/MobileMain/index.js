import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const MobileMain = () => {
	return (
		<div className='mobile'>
			<div className='mobile__main'>
				<ul>
					<li>
						<Link to='/history'>Busquedas Recientes</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MobileMain;
