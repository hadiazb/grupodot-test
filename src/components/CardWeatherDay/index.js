import React from 'react';
import './style.scss';
import {
	TiWeatherPartlySunny,
	TiWeatherSunny,
	TiWeatherDownpour,
	TiWeatherCloudy,
} from 'react-icons/ti';

const CardWeatherDay = () => {
	const Data = [
		{
			id: 1,
			date: 'Lunes 6 Jul',
			icon: <TiWeatherCloudy size='50' />,
			temp: '15.3°C',
			clima: 'Nubosidad',
		},
		{
			id: 2,
			date: 'Lunes 6 Jul',
			icon: <TiWeatherPartlySunny size='50' />,
			temp: '15.3°C',
			clima: 'Nubosidad',
		},
		{
			id: 3,
			date: 'Lunes 6 Jul',
			icon: <TiWeatherCloudy size='50' />,
			temp: '15.3°C',
			clima: 'Nubosidad',
		},
		{
			id: 4,
			date: 'Lunes 6 Jul',
			icon: <TiWeatherPartlySunny size='50' />,
			temp: '15.3°C',
			clima: 'Nubosidad',
		},
		{
			id: 5,
			date: 'Lunes 6 Jul',
			icon: <TiWeatherSunny size='50' />,
			temp: '15.3°C',
			clima: 'Nubosidad',
		},
		{
			id: 6,
			date: 'Lunes 6 Jul',
			icon: <TiWeatherCloudy size='50' />,
			temp: '15.3°C',
			clima: 'Nubosidad',
		},
		{
			id: 7,
			date: 'Lunes 6 Jul',
			icon: <TiWeatherDownpour size='50' />,
			temp: '15.3°C',
			clima: 'Nubosidad',
		},
	];

	return (
		<div className='contenedor cardDay'>
			<ul className='cardDay__list'>
				{Data.map((item) => (
					<li className='cardDay__list-item' key={item.id}>
						<h6>{item.date}</h6>
						{item.icon}
						<div className='info'>
							<h6>{item.temp}</h6>
							<h6>{item.clima}</h6>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CardWeatherDay;
