import { combineReducers } from 'redux';
import { CHANGE_TAB } from '../actions/types.js';
import dailies from './dailies.js';
import habits from './habits.js';
import todos from './todos.js';
import exercises from './exercises.js';

const currentTab = (state = 'todos', action) => {
    switch (action.type) {
        case CHANGE_TAB:
            return action.payload.newTab;
        default:
            return state;
    }
};


export default combineReducers({
    dailies,
    habits,
    todos,
    exercises,
    currentTab
});
