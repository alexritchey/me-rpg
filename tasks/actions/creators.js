
import * as actionTypes from './types.js';

export const completeTodoRequest = () => {
    return {
        type: actionTypes.COMPLETE_TODO.REQUEST,
        payload: {}
    };
};

export const completeTodoSuccess = id => {
    return {
        type: actionTypes.COMPLETE_TODO.SUCCESS,
        payload: {
            id
        }
    };
};

export const completeTodoFailure = () => {
    return {
        type: actionTypes.COMPLETE_TODO.FAILURE,
        payload: {}
    };
};
