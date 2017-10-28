import * as actions from './creators';

// Core Actions
export const dispatchCompleteTodo = id => (dispatch, getState) => {
    const state = getState();
    dispatch(actions.completeTodoSuccess(id));
};

export const dispatchAddTodo = description => (dispatch, getState) => {
    const state = getState();

    const mockAddTodoResponse = {
        id: 105,
        title: description,
        dismissed: false
    };

    dispatch(actions.addTodoSuccess(mockAddTodoResponse));
};

export const dispatchChangeTab = newTab => (dispatch, getState) => {
    const state = getState();
    dispatch(actions.changeTab(newTab));
};
