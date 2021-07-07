import React from "react";

import "./DropZone.css";

//icons
import inputFileIcon from "../../assets/InputFile.png";

export const InputWithFile: React.FC = () => {
  return (
    <div className="input-with-file-cointainer">
      <img src={inputFileIcon} alt="inputFileIcon" />
      <p>{`example_ file.txt`}</p>
    </div>
  );
};
