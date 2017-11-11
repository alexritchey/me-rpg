
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

export const completeHabitRequest = () => {
    return {
        type: actionTypes.COMPLETE_HABIT.REQUEST,
        payload: {}
    };
};

export const completeHabitSuccess = id => {
    return {
        type: actionTypes.COMPLETE_HABIT.SUCCESS,
        payload: {
            id
        }
    };
};

export const completeHabitFailure = () => {
    return {
        type: actionTypes.COMPLETE_HABIT.FAILURE,
        payload: {}
    };
};

export const addHabitRequest = () => {
    return {
        type: actionTypes.ADD_HABIT.REQUEST,
        payload: {}
    };
};

export const addHabitSuccess = data => {
    return {
        type: actionTypes.ADD_HABIT.SUCCESS,
        payload: {
            data
        }
    };
};

export const addHabitFailure = () => {
    return {
        type: actionTypes.ADD_HABIT.FAILURE,
        payload: {}
    };
};

export const completeDailyRequest = () => {
    return {
        type: actionTypes.COMPLETE_DAILY.REQUEST,
        payload: {}
    };
};

export const completeDailySuccess = id => {
    return {
        type: actionTypes.COMPLETE_DAILY.SUCCESS,
        payload: {
            id
        }
    };
};

export const completeDailyFailure = () => {
    return {
        type: actionTypes.COMPLETE_DAILY.FAILURE,
        payload: {}
    };
};

export const addDailyRequest = () => {
    return {
        type: actionTypes.ADD_DAILY.REQUEST,
        payload: {}
    };
};

export const addDailySuccess = data => {
    return {
        type: actionTypes.ADD_DAILY.SUCCESS,
        payload: {
            data
        }
    };
};

export const addDailyFailure = () => {
    return {
        type: actionTypes.ADD_DAILY.FAILURE,
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
