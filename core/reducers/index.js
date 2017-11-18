import { combineReducers } from 'redux';
import tasks from '../../tasks/reducers/index.js';
import character from '../../character/reducers/index.js';
import * as actionTypes from '../actions/actionTypes.js';

const user = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USER_DATA.SUCCESS:
            return {
                activeCharacterId: action.response.activeCharacterId
            };
        default:
            return state;
    }
};

export default combineReducers({
    user,
    tasks,
    character
});
