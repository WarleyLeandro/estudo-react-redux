import { createStore, combineReducers } from "redux";
import numerosReducer from './ducks/numeros'
export const reducers = combineReducers({
  numeros: numerosReducer,
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
