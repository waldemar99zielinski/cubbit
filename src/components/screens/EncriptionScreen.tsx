import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Screens.css";

//componetns
import { LoadingAnimation } from "../loadingAnimation/LoadingAnimation";
import { FilePreview } from "../dropzone/FilePreview";
import { InputWithCopy } from "../textInput/InputWithCopy";

//encrytion
import * as Encryption from "../../encription/encryptAndUpload";

interface Props {
  loaded: any;

  file: any;
}

export const EncriptionScreen: React.FC<Props> = ({ loaded, file }) => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [fileId, setFileId] = useState<string>("");
  const [fileKey, setFileKey] = useState<string>("");

  // const history = useHistory();

  useEffect(() => {
    if (file && loaded) {
      const encryptionProcessAndUpload = async () => {
        try {
          const loadedCopy = loaded.slice(0);
          const res = await Encryption.encryptAndUpload(
            loadedCopy,
            file.name,
            file.type
          );
          setFileId(res[1]);
          setFileKey(res[0]);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
      console.log("XD");
      encryptionProcessAndUpload();
    }
  }, [file, loaded]);

  return (
    <div className="screen-container encription-width ">
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          <FilePreview fileName={file.name || ""} />
          <div className="encription-label-input">
            <label className="text">Your file id:</label>
            <InputWithCopy value={fileId} />
          </div>

          <div className="encription-label-input text">
            <label className="text">Key:</label>
            {console.log(loaded)}
            <InputWithCopy value={fileKey} />
          </div>
        </>
      )}
    </div>
  );
};
