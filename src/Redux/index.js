import {createStore, applyMiddleware, combineReducers} from 'redux';

import configReducer from './Reducers/configReducer';

import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage' 

import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({

  configReducer,

});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export {store, persistor};
