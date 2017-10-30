import { combineReducers } from 'redux';

const createAttributes = () => {
    const hp = (state = {}, action) => {
        switch (action.type) {
            case 'INITIAL_ACTION':
                return state;
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