import * as actionTypes from './creators';
import { UPDATE_LEVEL, UPDATE_LEVEL_AND_EXP } from './types';
import firebase from 'react-native-firebase';

export const updateExp = (amount) => (dispatch) => {
    // TODO: Add to a constant with information about todos
    const EXP_TO_GIVE = amount || 50;
    const characterStatusRef = firebase.database().ref('users/1/characters/1/status');
    const currentStatus = characterStatusRef.once("value");

    currentStatus.then((currentStatusData) => {
        let newStatus;
        const exp = currentStatusData.val().experience;
        const currentLevel = currentStatusData.val().level;
        // Will level up
        if (exp.current + EXP_TO_GIVE >= exp.next) {
            const nextLevel = currentLevel + 1;
            const nextLevelExpReq = (nextLevel + 1) * 50;
            const spillover = (exp.current + EXP_TO_GIVE) - exp.next;

            newStatus = Object.assign({}, currentStatusData.val(), {
                experience: {
                    current: spillover,
                    next: nextLevelExpReq,
                    total: exp.total + EXP_TO_GIVE
                },
                level: nextLevel
            });
        }
        // Won't level up
        else {
            newStatus = Object.assign({}, currentStatusData.val(), {
                experience: Object.assign({}, exp, {
                    current: exp.current + EXP_TO_GIVE,
                    total: exp.total + EXP_TO_GIVE
                })
            });
        }

        if (newStatus) {
            dispatch({ type: UPDATE_LEVEL_AND_EXP.REQUEST });

            characterStatusRef.set(newStatus).then(() => {
                dispatch({
                    type: UPDATE_LEVEL_AND_EXP.SUCCESS,
                    payload: newStatus
                });
            });
        }
    });
};

export const updateLevel = newLevel => (dispatch) => {
    dispatch({
        type: UPDATE_LEVEL.REQUEST,
        newLevel
    });
};


// DEBUG

export const resetLevelAndExp = () => (dispatch) => {
    const characterStatusRef = firebase.database().ref('users/1/characters/1/status');
    const currentStatus = characterStatusRef.once("value");

    currentStatus.then((data) => {
        dispatch({ type: UPDATE_LEVEL_AND_EXP.REQUEST });

        const payload = Object.assign({}, data.val(), {
            experience: {
                current: 0,
                next: 100,
                total: 0
            },
            level: 1
        });

        characterStatusRef.set(payload).then(() => {
            dispatch({
                type: UPDATE_LEVEL_AND_EXP.SUCCESS,
                payload
            });
        });
    });
};
