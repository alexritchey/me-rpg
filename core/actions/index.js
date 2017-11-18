import * as actions from './creators';
import * as api from '../api.js';
import * as selectors from '../selectors.js';

// Core Actions
export const dispatchFetchInitialData = () => (dispatch, getState) => {
    dispatch(dispatchFetchUserData()).then(() => {
        const activeId = selectors.getActiveCharacterId(getState());
        if (activeId) {
            dispatch(dispatchFetchCharacterData(activeId));
        }
    });
};

export const dispatchFetchUserData = () => (dispatch, getState) => {
    dispatch(actions.fetchUserDataRequest());
    return api.fetchUserData().then(
        userData => {
            dispatch(actions.fetchUserDataSuccess(userData.val()));
        }
    );
};

export const dispatchFetchCharacterData = charId => (dispatch, getState) => {
    dispatch(actions.fetchCharacterDataRequest());
    return api.fetchCharacterData(charId).then(
        charData => {
            dispatch(actions.fetchCharacterDataSuccess(charData.val()));
        }
    );
};