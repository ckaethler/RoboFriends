import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

const initialStateSearch = {
  searchField: "",
};

// reducer is function
// reducer gets state and action
// if get action, act upon state
export const searchRobots = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCHFIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
};

const InitialStateRobots = {
    isPending: false,
    robots: [],
    error: '',
}

export const requestRobots = (state = InitialStateRobots, action = {}) => {
         switch (action.type) {
           case REQUEST_ROBOTS_PENDING:
             return Object.assign({}, state, { isPending: true });
           case REQUEST_ROBOTS_SUCCESS:
             return Object.assign({}, state, {
               robots: action.payload,
               isPending: true,
             });
           case REQUEST_ROBOTS_FAILED:
             return Object.assign({}, state, {
               error: action.payload,
               isPending: false,
             });
           default:
             return state;
         }
       };