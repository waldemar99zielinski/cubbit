import React from "react";

import "./DropZone.css";

//icons
import filesIcon from "../../assets/Files.png";
import arrowDownIcon from "../../assets/ArrowDown.png";

export const Input: React.FC = () => {
  return (
    <div className="input-container">
      <img src={filesIcon} alt="filesIcon" className="input-file-icon" />
      <p className="input-text">{`\`'..2$=%(+$>`}</p>
      <div className="input-divider"></div>
      <img
        src={arrowDownIcon}
        alt="arrowDownIcon"
        className="input-arrow-icon"
      />
    </div>
  );
};
