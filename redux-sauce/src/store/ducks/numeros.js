import { createActions, createReducer } from "reduxsauce";

const INITIAL_STATE = {
  min: 1,
  max: 10,
};

export const { Types, Creators } = createActions({
  alterNumMin: ["novoMin"],
  alterNumMax: ["novoMax"],
});

//Reduces em arrow function
const alterMin = (state = INITIAL_STATE, action) => ({
    ...state,
    min: action.novoMin,
});

const alterMax = (state = INITIAL_STATE, action) => ({
  ...state,
  max: action.novoMax,
});

export default createReducer(INITIAL_STATE, {
  [Types.ALTER_NUM_MIN]: alterMin,
  [Types.ALTER_NUM_MAX]: alterMax,
});
