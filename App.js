import { AppRegistry } from 'react-native';
import React from 'react';
import { NativeRouter } from 'react-router-native';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { initializeApp } from 'firebase';
import Root from './core/components/Root.js';
import coreReducers from './core/reducers/index.js';
import * as coreActions from './core/actions/index.js';

const firebaseConfig = {
    apiKey: "AIzaSyBHfZCRUP5vEHFzI2X-6M8xftJ6YdvltD0",
    authDomain: "merpg-5a5e3.firebaseapp.com",
    databaseURL: "https://merpg-5a5e3.firebaseio.com",
    projectId: "merpg-5a5e3",
    storageBucket: "merpg-5a5e3.appspot.com",
    messagingSenderId: "154022500766"
};

const firebaseApp = initializeApp(firebaseConfig);

const reducers = coreReducers;
const logger = createLogger();
const initialState = {
    user: {
        accountId: 0,
        activeCharacterId: 0,
        characters: []
    },
    tasks: {
        todos: [],
        dailies: [],
        habits: [],
        exercises: []
    }
};

// Initial Store
const store = createStore(reducers, initialState, applyMiddleware(thunk, logger));

store.dispatch(coreActions.dispatchInitialSetup());

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('meRPG', () => App);