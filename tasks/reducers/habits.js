import * as actionTypes from '../actions/types.js';

const dummyData = [
    {
        id: 102,
        title: "Turn off lights when leaving the apartment",
        dismissed: false
    }
];

const habits = (state = [], action) => {
    switch (action.type) {
        case 'INITIAL_ACTION':
            return dummyData;
        case actionTypes.ADD_HABIT.SUCCESS:
            return [...state, ...[action.payload.data]];
        default:
            return state;
    }
};

export default habits;