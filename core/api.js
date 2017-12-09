import firebase from 'react-native-firebase';
import { TODO_TYPE } from '../constants/tasks';

export const getDatabase = () => firebase.database();

export const fetchUserData = (id = 1) => {
    return getDatabase().ref(`users/${id}`).once('value');
};

export const fetchCharacterData = (id = 1) => {
    return getDatabase().ref(`users/1/characters/${id}`).once('value');
};

export const fetchTasks = () => {
    return getDatabase().ref(`users/1/tasks`).once('value');
};

export const fetchTodos = () => {
    return getDatabase().ref(`users/1/tasks/${TODO_TYPE}`);
};

export const fetchHabits = () => {
    return getDatabase().ref(`users/1/tasks/habits`);
};

export const fetchDailies = () => {
    return getDatabase().ref(`users/1/tasks/dailies`);
};

export const fetchTask = (type, id) => {
    return getDatabase().ref(`users/1/tasks/${type}/${id}`);
};

export const completeTask = (type, id) => {
    return getDatabase().ref(`users/1/tasks/${type}/${id}`).remove();
};
