import { languageTypes } from "../types/languageTypes";

export const changeLanguage = (language: string) => ({
  type: languageTypes.CHANGE_LANGUAGE,
  language: language,
});
