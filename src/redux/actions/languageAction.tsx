import { languageState, languageTypes } from "../types/languageTypes";

import { avaliableLanguages } from "../../constants/language";

export const changeLanguage = (language: string) => ({
  type: languageTypes.CHANGE_LANGUAGE,
  language: language,
});
