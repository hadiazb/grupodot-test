import React from 'react';
import './style.scss';
import Main from '../../components/Main/index';
import Search from '../../components/Search/index';
import GeneralWeatherInfo from '../../components/GeneralWeatherInfo/index';
import CardWeatherDay from '../../components/CardWeatherDay/index';

const Home = () => {
	return (
		<div className='home'>
			<Main />
			<Search />
			<GeneralWeatherInfo />
			<CardWeatherDay />
		</div>
	);
};

export default Home;
