import { createStore, compose, combineReducers } from "redux";

import { languageReducer } from "./reducers/languageReducer";
import { languageState } from "./types/languageTypes";

export interface ApplicationState {
  language: languageState;
}
export const rootReducer = combineReducers({
  language: languageReducer,
});
