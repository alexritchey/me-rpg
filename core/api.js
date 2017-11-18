import firebase from 'react-native-firebase';

export const getDatabase = () => firebase.database();

export const fetchUserData = (userId = 1, dbRef = getDatabase()) => {
    return dbRef.ref(`users/${userId}`).once('value');
};

export const fetchCharacterData = (charId = 1, dbRef = getDatabase()) => {
    return dbRef.ref(`users/1/characters/${charId}`).once('value');
};

export const fetchTasks = (dbRef = getDatabase()) => {
    return dbRef.ref(`users/1/tasks`).once('value');
};

export const fetchTodos = (taskId, type, dbRef = getDatabase()) => {
    return dbRef.ref(`users/1/tasks/todos`);
};

export const fetchHabits = (taskId, type, dbRef = getDatabase()) => {
    return dbRef.ref(`users/1/tasks/habits`);
};

export const fetchDailies = (taskId, type, dbRef = getDatabase()) => {
    return dbRef.ref(`users/1/tasks/dailies`);
};

export const fetchTask = (taskId, type, dbRef = getDatabase()) => {
    return dbRef.ref(`users/1/tasks/${type}/${taskId}`);
};
