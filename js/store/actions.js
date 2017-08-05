export const TYPES = {
	ADD_FORKS: 'ADD_FORKS'
};

export const actions = {
	addForks: forks => ({type: TYPES.ADD_FORKS, forks})
};
