import * as actionTypes from '../actions/types';
import { COMPLETE_TODO } from '../../tasks/actions/types.js';
import { combineReducers } from 'redux';

const createStatus = () => {
    const name = (state = "", action) => {
        switch (action.type) {
            case 'INITIAL_ACTION':
                return "Dextron";
            default:
                return state;
        }
    };

    const level = (state = 0, action) => {
        switch (action.type) {
            case 'INITIAL_ACTION':
                return 2;
            default:
                return state;
        }
    };

    const exp = (state = {}, action) => {
        switch (action.type) {
            case 'INITIAL_ACTION':
                return {
                    current: 20,
                    need: 120,
                    total: 140
                };
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
            case 'INITIAL_ACTION':
                return state;
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