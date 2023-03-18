import { ADD_STEP, RESET_STEPS } from './actions';

const initialState = {
    count: 0,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_STEP:
            return { count: state.count + 1 };
        case RESET_STEPS:
            return { count: 0 };
        default:
            return state;
    }
}

export default reducer;
