import * as actions from './creators';

// Core Actions

export const dispatchInitialSetup = () => (dispatch, getState) => {
    const state = getState();
    dispatch(actions.initialAction());
};