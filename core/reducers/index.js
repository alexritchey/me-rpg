import { combineReducers } from 'redux';
import tasks from '../../tasks/reducers/index.js';
import character from '../../character/reducers/index.js';

const user = (state = {}, action) => {
    switch (action.type) {
        case 'INITIAL_ACTION':
            return state;
        default:
            return state;
    }
};

export default combineReducers({
    user,
    tasks,
    character
});
