const status = (state = {}, action) => {
    switch (action.type) {
        case 'INITIAL_ACTION':
            return state;
        default:
            return state;
    }
};

export default status;