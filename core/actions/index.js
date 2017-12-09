import * as actions from './creators';
import * as api from '../api.js';
import * as selectors from '../selectors.js';

// Core Actions
export const dispatchFetchInitialData = () => (dispatch, getState) => {
    dispatch(dispatchFetchUserData()).then(() => {
        const activeId = selectors.getActiveCharacterId(getState());
        if (activeId) {
            dispatch(dispatchFetchCharacterData(activeId)).then(() => {
                dispatch(dispatchFetchTasks());
            });
        }
    });
};

export const dispatchFetchUserData = () => (dispatch) => {
    dispatch(actions.fetchUserDataRequest());
    return api.fetchUserData().then(
        userData => {
            dispatch(actions.fetchUserDataSuccess(userData.val()));
        }
    );
};

export const dispatchFetchCharacterData = charId => (dispatch) => {
    dispatch(actions.fetchCharacterDataRequest());
    return api.fetchCharacterData(charId).then(
        charData => {
            dispatch(actions.fetchCharacterDataSuccess(charData.val()));
        }
    );
};

export const dispatchFetchTasks = () => (dispatch) => {
    dispatch(actions.fetchTasksRequest());
    return api.fetchTasks().then(
        taskData => {
            dispatch(actions.fetchTasksSuccess(taskData.val()));
        }
    );
};