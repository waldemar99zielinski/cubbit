import React from "react";

import "./DropZone.css";

import inputFileIconWhite from "../../assets/InputFileWhite.png";
interface Props {
  fileName: string;
}
export const FilePreview: React.FC<Props> = ({ fileName }) => {
  return (
    <div className="file-preview-container ">
      <img src={inputFileIconWhite} alt="inputFileIcon" />
      <p>{fileName}</p>
    </div>
  );
};
