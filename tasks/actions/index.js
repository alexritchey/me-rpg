import * as actions from './creators';

// Core Actions

export const dispatchCompleteTodo = id => (dispatch, getState) => {
    const state = getState();
    dispatch(actions.completeTodoSuccess(id));
};