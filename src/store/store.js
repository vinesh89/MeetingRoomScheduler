import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from './reducers/index';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [
        'scheduleReducer'
    ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
}

export default () => {
    let store = createStore(
        persistedReducer,
        applyMiddleware(...middlewares)
    )

    let persistor = persistStore(store)
    return { store, persistor }
}
