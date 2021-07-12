import React from "react";

import "./DropZone.css";

//icons
import filesIcon from "../../assets/Files.png";
import arrowDownIcon from "../../assets/ArrowDown.png";

import Select from "../text/Select";

export const Input: React.FC = () => {
  return (
    <div className="input-label-container">
      <div className="input-container">
        <img src={filesIcon} alt="filesIcon" className="input-file-icon" />
        <Select />
        <div className="input-divider"></div>
        <img
          src={arrowDownIcon}
          alt="arrowDownIcon"
          className="input-arrow-icon"
        />
      </div>

      <p className="dropzone-label">{`or drop files here`}</p>
    </div>
  );
};
