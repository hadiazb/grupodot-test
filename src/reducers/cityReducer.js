import {
	GET_CITY,
	LOADING,
	ERROR,
} from '../types/citysTypes';

const INITIAL_STATE = {
	city: [
		{
			coord: {
				lon: -74.08,
				lat: 4.61,
			},
			weather: [
				{
					id: 803,
					main: 'Clouds',
					description: 'broken clouds',
					icon: '04d',
				},
			],
			base: 'stations',
			main: {
				temp: 292.15,
				feels_like: 287.62,
				temp_min: 292.15,
				temp_max: 292.15,
				pressure: 1026,
				humidity: 42,
			},
			visibility: 10000,
			wind: {
				speed: 5.1,
				deg: 120,
			},
			clouds: {
				all: 75,
			},
			dt: 1602780011,
			sys: {
				type: 1,
				id: 8582,
				country: 'CO',
				sunrise: 1602758477,
				sunset: 1602801740,
			},
			timezone: -18000,
			id: 3688689,
			name: 'Bogotá',
			cod: 200,
		},
	],
	loading: false,
	error: '',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_CITY:
			return {
				...state,
				city: [action.payload],
				loading: false,
				error: '',
			};

		case LOADING:
			return {
				...state,
				loading: true,
			};

		case ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
