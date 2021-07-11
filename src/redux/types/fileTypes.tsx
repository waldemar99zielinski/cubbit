export enum FileTypes {
  //action types
  ENCRYPTION_AND_UPLOAD_REQUEST = "@@files/ENCRYPTION_REQUEST",
  ENCRYPTION_AND_UPLOAD_DONE = "@@files/ENCRYPTION_AND_UPLOAD_DONE",
  ENCRYPTION_AND_UPLOAD_ERROR = "@@files/ENCRYPTION_AND_UPLOAD_ERROR",
}

export interface fileState {
  readonly isProcessing: boolean;
  readonly file_id?: string;
  readonly key?: string;
  readonly errors?: string;
}
