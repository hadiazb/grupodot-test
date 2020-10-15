import React from 'react';
import {
	TiWeatherSunny,
	TiWeatherDownpour,
	TiWeatherCloudy,
} from 'react-icons/ti';
import './style.scss';

const CardWeatherCity = () => {
	const Data = [
		{
			id: 1,
			city: 'Bogota',
			icon: <TiWeatherCloudy size='50' />,
			temp: '15.3°C',
		},
		{
			id: 2,
			city: 'Bogota',
			icon: <TiWeatherDownpour size='50' />,
			temp: '15.3°C',
		},
		{
			id: 3,
			city: 'Bogota',
			icon: <TiWeatherDownpour size='50' />,
			temp: '15.3°C',
		},
		{
			id: 4,
			city: 'Bogota',
			icon: <TiWeatherSunny size='50' />,
			temp: '15.3°C',
		},
		{
			id: 5,
			city: 'Bogota',
			icon: <TiWeatherSunny size='50' />,
			temp: '15.3°C',
		},
	];
	return (
		<div className='weatherCity'>
			<ul>
				{Data.map((item) => (
					<li key={item.id}>
						<h5>{item.city}</h5>
						{item.icon}
						<div className='info'>
							<h6>{item.temp}</h6>
							<h6 className='line'>Ver mas</h6>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CardWeatherCity;
