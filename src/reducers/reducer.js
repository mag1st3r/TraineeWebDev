import { combineReducers } from 'redux';
import { reducer as modal } from 'redux-modal';



const initialState = [];

const registerReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
};

const reducers = {
	registerReducer,
	modal
};

const reducer = combineReducers(reducers);

export default reducer