import * as actionTypes from './creators';

// Core Actions

export const dispatchInitialSetup = () => (dispatch, getState) => {
    const state = getState();
    dispatch(actionTypes.initialAction());
};