import axios from 'axios';
import {
	GET_CITY,
	LOADING,
	ERROR,
} from '../types/citysTypes';

export const getCity = (cityIn) => async (dispatch) => {
	const url = {
		host: 'https://api.openweathermap.org/data/2.5/',
		api_key: '73bc99d5366df7dcfa0974bd630d9022',
		city: cityIn,
	};

	dispatch({
		type: LOADING,
	});
	try {
		const response = await axios.get(
			`${url.host}weather?q=${url.city}&appid=${url.api_key}`
		);
		dispatch({
			type: GET_CITY,
			payload: { ...response.data },
		});
	} catch (error) {
		dispatch({
			type: ERROR,
			payload: `City notfound, error: ${error.message}`,
		});
	}
};
