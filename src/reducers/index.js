import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import historicalReducer from './historicalReducer';

export default combineReducers({
	cityReducer,
	historicalReducer,
});
