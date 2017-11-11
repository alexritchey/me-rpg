import * as actionTypes from '../actions/types.js';
import { getIndexById } from '../../helpers/index.js';

const dummyData = [
    {
        id: 100,
        title: "Go to store",
        dismissed: false
    },
    {
        id: 101,
        title: "Clean bathroom",
        dismissed: false
    }
];

const todos = (state = [], action) => {
    switch (action.type) {
        case 'INITIAL_ACTION':
            return dummyData;

        case actionTypes.COMPLETE_TODO.SUCCESS:
            const { id } = action.payload;
            const todoIdx = getIndexById(state, id);
            return [...state.slice(0, todoIdx), ...state.slice(todoIdx + 1)];

        case actionTypes.ADD_TODO.SUCCESS:
            return [...state, ...[action.payload.data]];

        default:
            return state;
    }
};

export default todos;