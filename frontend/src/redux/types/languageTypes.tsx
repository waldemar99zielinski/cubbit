import { avaliableLanguages } from "../../constants/language";

export interface languageInterface {
  language: avaliableLanguages;
}
export enum languageTypes {
  //action types
  CHANGE_LANGUAGE = "@@files/CHANGE_LANGUAGE",
}

export interface languageState {
  readonly language: string;
}
