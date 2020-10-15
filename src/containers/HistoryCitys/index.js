import React from 'react';
import './style.scss';
import Main from '../../components/Main/index';
import CardWeatherCity from '../../components/CardWeatherCity/index';

const HistoryCitys = () => {
	return (
		<div className='home'>
			<Main />
			<div className='history contenedor'>
				<CardWeatherCity />
			</div>
		</div>
	);
};

export default HistoryCitys;
