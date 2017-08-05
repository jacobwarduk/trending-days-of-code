import {createStore, combineReducers} from 'redux';
import forks from './reducers';

const rootReducer = combineReducers(
	{
		forks
	}
);

export default createStore(rootReducer);
