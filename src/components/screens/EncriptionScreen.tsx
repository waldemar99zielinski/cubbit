import React from "react";

import "./Screens.css";
//redux
import { connect } from "react-redux";
import { ApplicationState } from "../../redux/store";
//componetns
import { LoadingAnimation } from "../loadingAnimation/LoadingAnimation";
import { FilePreview } from "../dropzone/FilePreview";
import { InputWithCopy } from "../textInput/InputWithCopy";

interface Props {
  isProcessing: boolean;
  file_id?: string;
  key?: string;
  errors?: string;
}

const EncriptionScreen: React.FC<Props> = ({
  isProcessing,
  file_id,
  key,
  errors,
}) => {
  return (
    <div className="screen-container encription-width ">
      {isProcessing === undefined ? (
        <LoadingAnimation />
      ) : (
        <>
          <FilePreview fileName={"fileName"} />
          <div className="encription-label-input">
            <label className="text">Your file id:</label>
            <InputWithCopy value={file_id || ""} />
          </div>

          <div className="encription-label-input text">
            <label className="text">Key:</label>
            {console.log("encriptionScreen: ", key)}
            <InputWithCopy value={key || ""} />
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({ file }: ApplicationState) => ({
  isProcessing: file.isProcessing,
  file_id: file.file_id,
  key: file.key,
  errors: file.errors,
});
const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(EncriptionScreen);
