import * as actionTypes from '../actions/types.js';
import { getIndexById } from '../../helpers/index.js';

const dummyData = [
    {
        id: 103,
        title: "Feed Toby",
        dismissed: false,
        complete: false
    }
];

const dailies = (state = [], action) => {
    switch (action.type) {
        case 'INITIAL_ACTION':
            return dummyData;
        case actionTypes.ADD_DAILY.SUCCESS:
            return [...state, ...[action.payload.data]];

        case actionTypes.COMPLETE_DAILY.SUCCESS:
            const { id } = action.payload;
            const dailyIdx = getIndexById(state, id);
            const newState = [...state];
            if (dailyIdx !== -1) {
                newState[dailyIdx].complete = true;
            }
        default:
            return state;
    }
};

export default dailies;