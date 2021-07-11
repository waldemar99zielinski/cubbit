import { Reducer } from "redux";

import { languageState, languageTypes } from "../types/languageTypes";
import { avaliableLanguages } from "../../constants/language";

export const initialState: languageState = {
  language: avaliableLanguages.DECRYPTED,
};

const reducer: Reducer<languageState> = (state = initialState, action) => {
  switch (action.type) {
    case languageTypes.CHANGE_LANGUAGE: {
      return { ...state, language: action.language };
    }
    default: {
      return { ...state };
    }
  }
};

export { reducer as languageReducer };
