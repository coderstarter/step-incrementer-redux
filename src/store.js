// store.js
import { createStore } from 'redux';

const initialState = {
    steps: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_STEP':
            return {
                ...state,
                steps: state.steps + 1
            };
        case 'RESET_STEPS':
            return {
                ...state,
                steps: 0
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
