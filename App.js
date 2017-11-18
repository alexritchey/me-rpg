import { AppRegistry } from 'react-native';
import React from 'react';
import { NativeRouter } from 'react-router-native';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import Root from './core/components/Root.js';
import coreReducers from './core/reducers/index.js';
import * as coreActions from './core/actions/index.js';

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

// db.ref('users').set({
//     1: {
//         id: 1,
//         characters: {
//             1: {
//                 id: 1,
//                 attributes: {
//                     strength: {},
//                     hp: {},
//                     intelligence: {},
//                     shield: {}
//                 },
//                 equipment: {},
//                 status: {
//                     name: "Dextron",
//                     money: 0,
//                     level: 1,
//                     experience: {
//                         current: 0,
//                         total: 0,
//                         next: 100
//                     }
//                 }
//             }
//         },
//         user: {
//             activeCharacterId: 1
//         }
//     }
// });

// Initial Store
const store = createStore(reducers, initialState, applyMiddleware(thunk, logger));

store.dispatch(coreActions.dispatchFetchInitialData());

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
