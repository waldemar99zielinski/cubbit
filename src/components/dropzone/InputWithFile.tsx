import React from "react";

import "./DropZone.css";

//icons
import inputFileIcon from "../../assets/InputFile.png";

interface Props {
  fileName: string;
}

export const InputWithFile: React.FC<Props> = ({ fileName }) => {
  return (
    <div className="input-with-file-cointainer">
      <img src={inputFileIcon} alt="inputFileIcon" />
      <p>{fileName}</p>
    </div>
  );
};
