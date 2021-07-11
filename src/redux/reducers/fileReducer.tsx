import { Reducer } from "redux";

import { fileState, FileTypes } from "../types/fileTypes";

export const initialState: fileState = {
  isProcessing: false,
  file_id: undefined,
  key: undefined,
  errors: undefined,
};

const reducer: Reducer<fileState> = (state = initialState, action) => {
  switch (action.type) {
    case FileTypes.ENCRYPTION_AND_UPLOAD_REQUEST: {
      return { ...state, isProcessing: true };
    }

    case FileTypes.ENCRYPTION_AND_UPLOAD_DONE: {
      return {
        ...state,
        isProcessing: false,
        file_id: action.data.file_id,
        key: action.data.key,
      };
    }
    case FileTypes.ENCRYPTION_AND_UPLOAD_ERROR: {
      return {
        ...state,
        isProcessing: false,
        errors: action.error,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export { reducer as fileReducer };
