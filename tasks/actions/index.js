import * as actions from './creators';
import { completeTask } from '../../core/api';
import firebase from 'react-native-firebase';
import { TODO_TYPE } from '../../constants/tasks';
import { updateExp } from '../../character/actions/index';

export const getDatabase = () => firebase.database();

export const dispatchCompleteTodo = id => (dispatch) => {
    dispatch(actions.completeTodoRequest());

    completeTask(TODO_TYPE, id).then(() => {
        dispatch(actions.completeTodoSuccess(id));
        dispatch(updateExp(30));
    });
};

export const dispatchAddTodo = title => (dispatch) => {
    dispatch(actions.addTodoRequest());

    const newTodoRef = getDatabase().ref(`users/1/tasks/${TODO_TYPE}`).push();
    const payload = { title, id: newTodoRef.key, type: TODO_TYPE};
    newTodoRef.set(payload).then(() => {
        dispatch(actions.addTodoSuccess(payload));
    });
};

export const dispatchChangeTab = newTab => (dispatch) => {
    dispatch(actions.changeTab(newTab));
};
