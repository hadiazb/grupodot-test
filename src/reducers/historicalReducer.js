import {
	GET_CITY_HISTORY,
	LOADING,
	ERROR,
} from '../types/historicalTypes';

const INITIAL_STATE = {
	history: [
		{
			cod: '200',
			message: 0,
			cnt: 7,
			list: [
				{
					dt: 1602784800,
					main: {
						temp: 292.12,
						feels_like: 290.65,
						temp_min: 291.04,
						temp_max: 292.12,
						pressure: 1018,
						sea_level: 1018,
						grnd_level: 751,
						humidity: 51,
						temp_kf: 1.08,
					},
					weather: [
						{
							id: 500,
							main: 'Rain',
							description: 'light rain',
							icon: '10d',
						},
					],
					clouds: {
						all: 59,
					},
					wind: {
						speed: 1.64,
						deg: 154,
					},
					visibility: 10000,
					pop: 0.78,
					rain: {
						'3h': 1.26,
					},
					sys: {
						pod: 'd',
					},
					dt_txt: '2020-10-15 18:00:00',
				},
				{
					dt: 1602795600,
					main: {
						temp: 290.12,
						feels_like: 289.2,
						temp_min: 289.29,
						temp_max: 290.12,
						pressure: 1012,
						sea_level: 1012,
						grnd_level: 748,
						humidity: 66,
						temp_kf: 0.83,
					},
					weather: [
						{
							id: 500,
							main: 'Rain',
							description: 'light rain',
							icon: '10d',
						},
					],
					clouds: {
						all: 50,
					},
					wind: {
						speed: 1.61,
						deg: 151,
					},
					visibility: 10000,
					pop: 0.87,
					rain: {
						'3h': 2.23,
					},
					sys: {
						pod: 'd',
					},
					dt_txt: '2020-10-15 21:00:00',
				},
				{
					dt: 1602806400,
					main: {
						temp: 284.89,
						feels_like: 283.54,
						temp_min: 284.32,
						temp_max: 284.89,
						pressure: 1013,
						sea_level: 1013,
						grnd_level: 747,
						humidity: 84,
						temp_kf: 0.57,
					},
					weather: [
						{
							id: 500,
							main: 'Rain',
							description: 'light rain',
							icon: '10n',
						},
					],
					clouds: {
						all: 54,
					},
					wind: {
						speed: 1.66,
						deg: 132,
					},
					visibility: 10000,
					pop: 0.87,
					rain: {
						'3h': 0.67,
					},
					sys: {
						pod: 'n',
					},
					dt_txt: '2020-10-16 00:00:00',
				},
				{
					dt: 1602817200,
					main: {
						temp: 283.64,
						feels_like: 282.43,
						temp_min: 283.56,
						temp_max: 283.64,
						pressure: 1015,
						sea_level: 1015,
						grnd_level: 749,
						humidity: 87,
						temp_kf: 0.08,
					},
					weather: [
						{
							id: 803,
							main: 'Clouds',
							description: 'broken clouds',
							icon: '04n',
						},
					],
					clouds: {
						all: 83,
					},
					wind: {
						speed: 1.21,
						deg: 116,
					},
					visibility: 10000,
					pop: 0.29,
					sys: {
						pod: 'n',
					},
					dt_txt: '2020-10-16 03:00:00',
				},
				{
					dt: 1602828000,
					main: {
						temp: 282.88,
						feels_like: 281.67,
						temp_min: 282.88,
						temp_max: 282.88,
						pressure: 1013,
						sea_level: 1013,
						grnd_level: 747,
						humidity: 87,
						temp_kf: 0,
					},
					weather: [
						{
							id: 804,
							main: 'Clouds',
							description: 'overcast clouds',
							icon: '04n',
						},
					],
					clouds: {
						all: 91,
					},
					wind: {
						speed: 0.95,
						deg: 98,
					},
					visibility: 10000,
					pop: 0.28,
					sys: {
						pod: 'n',
					},
					dt_txt: '2020-10-16 06:00:00',
				},
				{
					dt: 1602838800,
					main: {
						temp: 282.2,
						feels_like: 280.71,
						temp_min: 282.2,
						temp_max: 282.2,
						pressure: 1013,
						sea_level: 1013,
						grnd_level: 747,
						humidity: 85,
						temp_kf: 0,
					},
					weather: [
						{
							id: 804,
							main: 'Clouds',
							description: 'overcast clouds',
							icon: '04n',
						},
					],
					clouds: {
						all: 100,
					},
					wind: {
						speed: 1.02,
						deg: 111,
					},
					visibility: 10000,
					pop: 0.14,
					sys: {
						pod: 'n',
					},
					dt_txt: '2020-10-16 09:00:00',
				},
				{
					dt: 1602849600,
					main: {
						temp: 284.51,
						feels_like: 283.36,
						temp_min: 284.51,
						temp_max: 284.51,
						pressure: 1015,
						sea_level: 1015,
						grnd_level: 750,
						humidity: 81,
						temp_kf: 0,
					},
					weather: [
						{
							id: 804,
							main: 'Clouds',
							description: 'overcast clouds',
							icon: '04d',
						},
					],
					clouds: {
						all: 98,
					},
					wind: {
						speed: 1.06,
						deg: 107,
					},
					visibility: 10000,
					pop: 0.13,
					sys: {
						pod: 'd',
					},
					dt_txt: '2020-10-16 12:00:00',
				},
			],
			city: {
				id: 3688689,
				name: 'Bogotá',
				coord: {
					lat: 4.6097,
					lon: -74.0817,
				},
				country: 'CO',
				population: 1000000,
				timezone: -18000,
				sunrise: 1602758477,
				sunset: 1602801740,
			},
		},
	],
	loading: false,
	error: '',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_CITY_HISTORY:
			return {
				...state,
				history: [action.payload],
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
