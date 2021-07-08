import React from "react";

import "./Screens.css";

import { LoadingAnimation } from "../loadingAnimation/LoadingAnimation";
import { FilePreview } from "../dropzone/FilePreview";
import { InputWithCopy } from "../textInput/InputWithCopy";
export const EncriptionScreen: React.FC = () => {
  return (
    <div className="screen-container encription-width ">
      {/* <LoadingAnimation /> */}
      <FilePreview fileName={"fileName"} />
      <div className="encription-label-input">
        <label className="text">Your file id:</label>
        <InputWithCopy value={"longkeyvalue"} />
      </div>

      <div className="encription-label-input text">
        <label className="text">Your file id:</label>
        <InputWithCopy value={"longkeyvalue"} />
      </div>
    </div>
  );
};
