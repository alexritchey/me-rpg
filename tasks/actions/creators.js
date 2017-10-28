
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

export const addTodoRequest = () => {
    return {
        type: actionTypes.ADD_TODO.REQUEST,
        payload: {}
    };
};

export const addTodoSuccess = data => {
    return {
        type: actionTypes.ADD_TODO.SUCCESS,
        payload: {
            data
        }
    };
};

export const addTodoFailure = () => {
    return {
        type: actionTypes.ADD_TODO.FAILURE,
        payload: {}
    };
};


export const changeTab = newTab => {
    return {
        type: actionTypes.CHANGE_TAB,
        payload: {
            newTab
        }
    };
};
