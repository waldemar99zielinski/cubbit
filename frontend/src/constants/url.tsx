const apiUrl = "http://localhost:8080/v1";
const fileUrl = "/files";
export const postFile = (): string => {
  return [apiUrl, fileUrl].join("");
};
export const getFileInfo = (id: string): string => {
  return [apiUrl, fileUrl, "/", id].join("");
};
export const getFile = (id: string): string => {
  return [apiUrl, fileUrl, "/", id, "/download"].join("");
};
