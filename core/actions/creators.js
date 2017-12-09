import * as types from './actionTypes.js';

export const initialAction = () => {
    return {
        type: "INITIAL_ACTION",
        payload: {}
    };
};

export const fetchUserDataRequest = () => {
    return {
        type: types.FETCH_USER_DATA.REQUEST
    };
};

export const fetchUserDataSuccess = response => {
    return {
        type: types.FETCH_USER_DATA.SUCCESS,
        response
    };
};

export const fetchUserDataFailure = err => {
    return {
        type: types.FETCH_USER_DATA.FAILURE,
        message: err
    };
};

export const fetchCharacterDataRequest = () => {
    return {
        type: types.FETCH_CHARACTER_DATA.REQUEST
    };
};

export const fetchCharacterDataSuccess = response => {
    return {
        type: types.FETCH_CHARACTER_DATA.SUCCESS,
        response
    };
};

export const fetchCharacterDataFailure = err => {
    return {
        type: types.FETCH_CHARACTER_DATA.FAILURE,
        message: err
    };
};

export const fetchTasksRequest = () => {
    return {
        type: types.FETCH_TASKS.REQUEST
    };
};

export const fetchTasksSuccess = response => {
    return {
        type: types.FETCH_TASKS.SUCCESS,
        response
    };
};

export const fetchTasksFailure = err => {
    return {
        type: types.FETCH_TASKS.FAILURE,
        message: err
    };
};