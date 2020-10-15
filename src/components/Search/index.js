import React, { useEffect, useState } from 'react';
import './style.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { connect } from 'react-redux';

import * as cityActions from '../../actions/cityActions';

const Search = (props) => {
	const { city, getCity } = props;
	const [cityName, setCityName] = useState({
		name: 'Bogota',
	});

	useEffect(() => {
		if (!city.length) {
			getCity(cityName.name);
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const handleInputChange = (e) => {
		setCityName({
			...cityName,
			name: e.target.value,
		});
	};

	const handleClick = () => {
		if (cityName.name === '') {
			alert('Ingresar nombre de la ciudad');
		}
		if (cityName.name !== '') {
			getCity(cityName.name);
		}
	};

	return (
		<div className='contenedor'>
			<div className='search__container'>
				<h5>Busqueda por ciudad</h5>
				<div className='search'>
					<input
						type='text'
						className='search__input'
						placeholder='City...'
						onChange={handleInputChange}
					/>
					<div className='search__button'>
						<button
							className='button'
							type='button'
							onClick={handleClick}
						>
							<AiOutlineSearch size='20' />
						</button>
					</div>
				</div>
				<h5>{cityName.name}</h5>
			</div>
		</div>
	);
};

const mapStateToProps = (reducers) => {
	const { cityReducer } = reducers;
	return cityReducer;
};

export default connect(
	mapStateToProps,
	cityActions
)(Search);
