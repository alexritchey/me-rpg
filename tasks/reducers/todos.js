import * as actionTypes from '../actions/types.js';
import { FETCH_TASKS } from '../../core/actions/actionTypes.js';
import { getIndexById } from '../../helpers/index.js';
import { TODO_TYPE } from '../../constants/tasks';

const formatTodos = todos => {
    const list = [];
    for(const prop in todos) {
        if (todos[prop]) {
            list.push(todos[prop]);
        }
    }
    return list;
};

const todos = (state = [], action) => {
    switch (action.type) {
        case FETCH_TASKS.SUCCESS:
            return formatTodos(action.response[TODO_TYPE]);

        case actionTypes.COMPLETE_TODO.SUCCESS:
            const { id } = action.payload;
            const todoIdx = getIndexById(state, id);
            return [...state.slice(0, todoIdx), ...state.slice(todoIdx + 1)];

        case actionTypes.ADD_TODO.SUCCESS:
            return [...state, ...[action.data]];

        default:
            return state;
    }
};

export default todos;