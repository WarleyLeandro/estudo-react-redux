import { createStore, combineReducers } from "redux";
import numerosReducer from './ducks/numeros'

import { persistStore, persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";


export const rootReducer = combineReducers({
  numeros: numerosReducer,
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor};
