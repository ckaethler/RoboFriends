import { CHANGE_SEARCHFIELD } from './constants';

const initialState = {
    searchField: '',
}

// reducer is function
// reducer gets state and action
// if get action, act upon state
export const searchRobots = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCHFIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}
