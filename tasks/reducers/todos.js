import * as actionTypes from '../actions/types.js';
import { getIndexById } from '../../helpers/index.js';

const dummyData = [
    {
        id: 100,
        title: "My First Todo",
        dismissed: false
    },
    {
        id: 101,
        title: "My Second Todo",
        dismissed: false
    },
    {
        id: 102,
        title: "My Third Todo",
        dismissed: false
    },
    {
        id: 103,
        title: "My Fourth Todo",
        dismissed: false
    },
    {
        id: 104,
        title: "My Fifth Todo",
        dismissed: false
    }
];

const todos = (state = [], action) => {
    switch (action.type) {
        case 'INITIAL_ACTION':
            return dummyData;

        case actionTypes.COMPLETE_TODO.SUCCESS:
            const { id } = action.payload;
            console.log(id);
            const todoIdx = getIndexById(state, id);
            return [...state.slice(0, todoIdx), ...state.slice(todoIdx + 1)];

        default:
            return state;
    }
};

export default todos;