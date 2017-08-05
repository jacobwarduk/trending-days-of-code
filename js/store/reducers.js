import {TYPES} from './actions';

const initialStates = {
	forks: {}
};

const forks = (state = initialStates.forks, action) => {
	switch (action.type) {
		case TYPES.ADD_FORKS:
			return Object.assign({}, state, {forks: action.object});

		default:
			return state;
	}
};

export default forks;
