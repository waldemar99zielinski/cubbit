import { Reducer } from "redux";

import { fileState, FileTypes } from "../types/fileTypes";

export const initialState: fileState = {
  encryption: false,
  upload: false,
  file_id: undefined,
  key: undefined,
  errors: undefined,
};

const reducer: Reducer<fileState> = (state = initialState, action) => {
  switch (action.type) {
    case FileTypes.ENCRYPTION_REQUEST: {
      return { ...state, encryption: true, upload: false };
    }
    case FileTypes.UPLOAD_REQUEST: {
      return { ...state, encryption: false, upload: true };
    }
    case FileTypes.ENCRYPTION_AND_UPLOAD_DONE: {
      return {
        ...state,
        encryption: false,
        upload: false,
        file_id: action.data.file_id,
        key: action.data.key,
      };
    }
    case FileTypes.ENCRYPTION_AND_UPLOAD_ERROR: {
      return {
        ...state,
        encryption: false,
        upload: false,
        errors: action.error,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as fileReducer };
