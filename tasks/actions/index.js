import * as actions from './creators';

// Core Actions
export const dispatchCompleteTodo = id => (dispatch, getState) => {
    const state = getState();
    dispatch(actions.completeTodoSuccess(id));
};

export const dispatchChangeTab = newTab => (dispatch, getState) => {
    const state = getState();
    dispatch(actions.changeTab(newTab));
};
