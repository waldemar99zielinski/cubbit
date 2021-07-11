import { createStore, compose, combineReducers } from "redux";

import { fileReducer } from "./reducers/fileReducer";
import { fileState } from "./types/fileTypes";

export interface ApplicationState {
  file: fileState;
}
export const rootReducer = combineReducers({
  file: fileReducer,
});
