import { fileState, FileTypes } from "../types/fileTypes";

import { ActionCreator, Action, Dispatch } from "redux";

export const encryptionRequest = () => ({
  type: FileTypes.ENCRYPTION_REQUEST,
});
export const uploadRequest = () => ({
  type: FileTypes.UPLOAD_REQUEST,
});

export const encryptionAndUploadDone = (file_id: string, key: string) => ({
  type: FileTypes.ENCRYPTION_AND_UPLOAD_DONE,
  data: { file_id, key },
});
export const ecryprionAndUploadError = (error: string) => ({
  type: FileTypes.ENCRYPTION_AND_UPLOAD_ERROR,
  error: error,
});
