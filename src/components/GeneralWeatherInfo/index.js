import React from 'react';
import './style.scss';
import { TiWeatherCloudy } from 'react-icons/ti';
import { connect } from 'react-redux';

const GeneralWeatherInfo = (props) => {
	const { city, loading, error } = props;

	const putContent = () => {
		if (loading) {
			return <h1>Cargando</h1>;
		}

		if (error) {
			return (
				<h2>
					Error, esta ciudad no existe, puede ser que este mal
					escrita
				</h2>
			);
		}

		return (
			<div className='information__content'>
				<div className='icon'>
					<TiWeatherCloudy size='120' />
				</div>
				<div className='info'>
					<ul>
						<li>
							<h6>{city[0].weather[0].description}</h6>
						</li>
						<li>
							<h6 className='nubosidad blue'>
								{Math.round(city[0].main.temp_max - 273.15)}
								°C
							</h6>
						</li>
						<li>
							<h6 className='nubosidad black'>
								{Math.round(city[0].main.temp_min - 273.15)}°C
							</h6>
						</li>
						<li>
							<h6>Humedad</h6>
						</li>
						<li>
							<h6>{city[0].main.humidity}%</h6>
						</li>
						<li>
							<h6>|</h6>
						</li>
						<li>
							<h6>Vientos</h6>
						</li>
						<li>
							<h6>{city[0].wind.speed}m/s</h6>
						</li>
					</ul>
				</div>
			</div>
		);
	};

	return (
		<div className='information contenedor'>
			{putContent()}
		</div>
	);
};

const mapStateToProps = (reducers) => {
	const { cityReducer } = reducers;
	return cityReducer;
};

export default connect(mapStateToProps)(GeneralWeatherInfo);
