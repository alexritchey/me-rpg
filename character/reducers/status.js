import * as actionTypes from '../actions/types';
import { COMPLETE_TODO } from '../../tasks/actions/types.js';

const initialState = {
    level: 0,
    exp: {
        current: 40,
        need: 120,
        progress: 0,
        tilNextLevel: 0,
        total: 0
    }
};

const status = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIAL_ACTION':
            return {
                level: 2,
                exp: {
                    current: 20,
                    need: 120,
                    tilNextlevel: 100,
                    total: 140
                }
            };
        case COMPLETE_TODO.SUCCESS:
            return Object.assign({}, state, {
                exp: Object.assign({}, state.exp, {
                    current: state.exp.current + 15
                })
            });
        default:
            return state;
    }
};

export default status;