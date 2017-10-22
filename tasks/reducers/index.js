import { combineReducers } from 'redux';
import dailies from './dailies.js';
import habits from './habits.js';
import todos from './todos.js';
import exercises from './exercises.js';

export default combineReducers({
    dailies,
    habits,
    todos,
    exercises
});
