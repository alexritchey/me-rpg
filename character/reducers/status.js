import * as actionTypes from '../actions/types';
import { FETCH_CHARACTER_DATA } from '../../core/actions/actionTypes.js';
import { COMPLETE_TODO } from '../../tasks/actions/types.js';
import { combineReducers } from 'redux';

const createStatus = () => {
    const name = (state = "", action) => {
        switch (action.type) {
            case FETCH_CHARACTER_DATA.SUCCESS:
                return action.response.status.name;
            default:
                return state;
        }
    };

    const level = (state = 0, action) => {
        switch (action.type) {
            case FETCH_CHARACTER_DATA.SUCCESS:
                return action.response.status.level;
            default:
                return state;
        }
    };

    const exp = (state = {}, action) => {
        switch (action.type) {
            case FETCH_CHARACTER_DATA.SUCCESS:
                return action.response.status.experience;
            case COMPLETE_TODO.SUCCESS:
                return Object.assign({}, state, {
                    current: state.current + 15
                });
            default:
                return state;
        }
    };

    const money = (state = 0, action) => {
        switch (action.type) {
            case FETCH_CHARACTER_DATA.SUCCESS:
                return action.response.status.money;
            default:
                return state;
        }
    };

    return combineReducers({
        name,
        level,
        exp,
        money
    });
};

export default createStatus();