import { FETCH_USER_DATA, FETCH_CHARACTER_DATA } from './actionTypes.js';

export const initialAction = () => {
    return {
        type: "INITIAL_ACTION",
        payload: {}
    };
};

export const fetchUserDataRequest = () => {
    return {
        type: FETCH_USER_DATA.REQUEST
    };
};

export const fetchUserDataSuccess = response => {
    return {
        type: FETCH_USER_DATA.SUCCESS,
        response
    };
};

export const fetchUserDataFailure = err => {
    return {
        type: FETCH_USER_DATA.FAILURE,
        message: err
    };
};

export const fetchCharacterDataRequest = () => {
    return {
        type: FETCH_CHARACTER_DATA.REQUEST
    };
};

export const fetchCharacterDataSuccess = response => {
    return {
        type: FETCH_CHARACTER_DATA.SUCCESS,
        response
    };
};

export const fetchCharacterDataFailure = err => {
    return {
        type: FETCH_CHARACTER_DATA.FAILURE,
        message: err
    };
};