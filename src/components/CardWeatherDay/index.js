import React, { useState, useEffect } from 'react';
import './style.scss';
import {
	// TiWeatherPartlySunny,
	// TiWeatherSunny,
	// TiWeatherDownpour,
	TiWeatherCloudy,
} from 'react-icons/ti';
import { connect } from 'react-redux';

import * as historicalActions from '../../actions/historicalActions';

const CardWeatherDay = (props) => {
	const {
		historicalReducer: { history },
		getHistoryCity,
		cityReducer,
	} = props;

	const [cityName, setCityName] = useState(
		cityReducer.city[0].name
	);

	useEffect(() => {
		if (cityReducer.city[0].name !== 'Bogotá') {
			getHistoryCity(cityReducer.city[0].name);
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const data = [];

	for (let i = 0; i < 7; i++) {
		data.push({
			id: i + 1,
			date:
				new Date(history[0].list[i].dt_txt).getDate() +
				'/' +
				new Date(history[0].list[i].dt_txt).getMonth() +
				'/' +
				new Date().getFullYear(),
			hour:
				new Date(history[0].list[i].dt_txt).getHours() +
				' Hours',
			icon: <TiWeatherCloudy size='50' />,
			temp: history[0].list[i].main.temp,
			clima: history[0].list[i].weather[0].description,
		});
	}

	console.log(props, cityName);

	return (
		<div className='contenedor cardDay'>
			<ul className='cardDay__list'>
				{data.map((item) => (
					<li className='cardDay__list-item' key={item.id}>
						<h6>{item.date}</h6>
						<h6>{item.hour}</h6>
						{item.icon}
						<div className='info'>
							<h6>{Math.round(item.temp - 273.15, 2)}°C</h6>
							<h6>{item.clima}</h6>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

const mapStateToProps = (reducers) => {
	const { cityReducer, historicalReducer } = reducers;
	return { cityReducer, historicalReducer };
};

export default connect(
	mapStateToProps,
	historicalActions
)(CardWeatherDay);
