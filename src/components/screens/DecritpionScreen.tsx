import React, { useState } from "react";
import axios from "axios";
import "./Screens.css";

//components
import { Input } from "../textInput/Input";
import { Button } from "../button/Button";

//utils
import * as URL from "../../constants/url";
import * as Encription from "../../encription/encryptAndUpload";
import { Redirect } from "react-router-dom";
interface fileInterace {
  fileName: string;
  fileSize: number;
  fileMime: string;
  fileVect: string;
}

export const DecriptionScreen: React.FC = () => {
  const [isValidIdEmpty, setIsValidIdEmpty] = useState<boolean>(true);
  const [fileId, setFileId] = useState<string>("");
  const [fileInfo, setFileInfo] = useState<fileInterace>();
  const [error, setError] = useState<Error>();

  const [encKey, setEncKey] = useState<string>("");

  const getFileInfo = async () => {
    try {
      if (fileId.length === 36) {
        const serverRes = await axios({
          url: URL.getFileInfo(fileId),
        });

        if (serverRes.status === 200) {
          const resFileInfo: fileInterace = {
            fileName: serverRes.data.fileInfo.name,
            fileSize: Number(serverRes.data.fileInfo.size || 0),
            fileMime: serverRes.data.fileInfo.mime,
            fileVect: serverRes.data.fileInfo.iv,
          };

          setFileInfo(resFileInfo);

          setIsValidIdEmpty(false);
        } else {
          alert("Something went wrong...try again");
          console.error("couldnt get file info");
        }
      } else {
        alert("Insert proper file id - length of 32 chars");
      }
    } catch (error) {
      alert("Something went wrong...try again");
      setError(error);
    }
  };

  const handleFileDonwloadAndDecryption = async () => {
    try {
      if (encKey.length > 0 && fileInfo?.fileVect) {
        await Encription.decryptAndDownload(
          fileId,
          encKey,
          fileInfo?.fileVect,
          fileInfo?.fileName
        );
      } else {
        alert("Insert key");
      }
    } catch (err) {
      alert("Something went wrong...try again");
      console.error(err);
      setError(error);
    }
  };

  return (
    <div className="screen-container decription-width ">
      {error ? (
        <Redirect to="/" />
      ) : isValidIdEmpty ? (
        <>
          <div className="encription-label-input">
            <label className="text">Insert your file id:</label>
            <Input
              value={fileId}
              onChange={(e) => {
                setFileId(e.target.value.slice(0, 36));
              }}
            />
          </div>
          <div className="decription-button-container">
            <Button
              style={"decription-screen-button"}
              title={"Get file"}
              onClick={() => getFileInfo()}
            />
          </div>
        </>
      ) : (
        <>
          <div className="decription-label-input">
            <label className="text label-width">File id:</label>
            <Input value={fileId} onChange={() => {}} />
          </div>
          <div className="decription-label-input">
            <label className="text label-width">File name:</label>
            <Input value={fileInfo?.fileName || ""} onChange={() => {}} />
          </div>
          <div className="decription-label-input">
            <label className="text label-width">File size:</label>
            <Input
              value={(fileInfo?.fileSize.toString() || "0") + " bytes"}
              onChange={() => {}}
            />
          </div>
          <div className="decription-label-input">
            <label className="text label-width">File mime:</label>
            <Input value={fileInfo?.fileMime || ""} onChange={() => {}} />
          </div>{" "}
          <div className="encription-label-input">
            <label className="text ">Insert file key:</label>
            <Input
              value={encKey}
              onChange={(e) => {
                setEncKey(e.target.value.slice(0, 44));
              }}
            />
          </div>
          <div className="decription-button-container">
            <Button
              style={"decription-screen-button"}
              title={"Decrypt and download"}
              onClick={() => {
                handleFileDonwloadAndDecryption();
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};
