import { FETCH_CHARACTER_DATA } from '../../core/actions/actionTypes.js';
import { combineReducers } from 'redux';

const createAttributes = () => {
    const hp = (state = {}, action) => {
        switch (action.type) {
            case FETCH_CHARACTER_DATA.SUCCESS:
                return action.response.hp;
            default:
                return state;
        }
    };

    const shield = (state = {}, action) => {
        switch (action.type) {
            case 'INITIAL_ACTION':
                return state;
            default:
                return state;
        }
    };

    const strength = (state = {}, action) => {
        switch (action.type) {
            case 'INITIAL_ACTION':
                return state;
            default:
                return state;
        }
    };

    const intelligence = (state = {}, action) => {
        switch (action.type) {
            case 'INITIAL_ACTION':
                return state;
            default:
                return state;
        }
    };

    return combineReducers({
        hp,
        shield,
        strength,
        intelligence
    });
};

export default createAttributes();