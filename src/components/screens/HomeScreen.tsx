import React, { useState, useEffect, Dispatch } from "react";
import * as crypto from "crypto";
import { saveAs } from "file-saver";
import axios from "axios";

import { useHistory } from "react-router-dom";
import "./Screens.css";

//components
import { DropZone } from "../dropzone/DropZone";
import { Button } from "../button/Button";
//redux
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {
  encryptionRequest,
  encryptionAndUploadDone,
  ecryprionAndUploadError,
} from "../../redux/actions/fileAction";
//utils
import * as Encryption from "../../encription/excription";
import { encryptAndUpload } from "../../encription/encryptAndUpload";
import * as URL from "../../constants/url";

interface Props {
  loaded: any;
  setLoaded: Dispatch<any>;
}

export const HomeScreen: React.FC<Props> = ({}) => {
  const [file, setFile] = useState<File | null>(null);

  const [loaded, setLoaded] = useState<ArrayBuffer | null>();

  const history = useHistory();

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLoaded(reader.result as ArrayBuffer);
      };
      reader.readAsArrayBuffer(file);
    } else {
      setLoaded(null);
    }
  }, [file]);

  const onClickDecrypt = async () => {
    console.log("onClickDecrypt");
    history.push("/decryption");
  };

  const encrypt = async () => {
    if (file && loaded) {
      try {
        encryptionRequest();
        const key = crypto.randomBytes(32);
        //convert iv to string hex to simplify data exchange
        const iv = crypto.randomBytes(8).toString("hex");

        console.log("key: ", key.toString("base64"), key, "iv: ", iv);

        const encrypted = Encryption.encryptFile(
          Encryption.toBuffer(loaded),
          key,
          iv
        );

        const blob = new Blob([encrypted as BlobPart]);

        const data = new FormData();
        data.append("file", blob, file.name);
        data.append("name", file.name);
        data.append("mime", file.type);
        data.append("iv", iv);

        const serverRes = await axios({
          method: "post",
          data: data,
          url: URL.postFile(),
        });
        console.log("file_id", serverRes.data.file.file_id);
        encryptionAndUploadDone(serverRes.data.file.file_id, key.toString(""));
        console.log();
        console.log(serverRes);
      } catch (err) {
        ecryprionAndUploadError(err);
        console.error(err);
      }
    }
  };

  const onClickEncrypt = async () => {
    if (loaded && file) {
      await encrypt();
      history.push("/encryption");
    } else {
      console.log("HomeScreen: encrypt: no file");
    }
  };

  return (
    <div className="screen-container ">
      <p className="text body-text">
        {
          '^#5 -"$#=.-+(-$=%(+$=$-"18/3(.-= -#=#$"18/3(.-K=p$"41$= -8=%(+$=38/$= -#=, (-3 (-=8.41=/1(5 "8>'
        }
        {/* {console.log("loaded: ", loaded)} */}
      </p>
      <DropZone file={file} setFile={setFile} />
      <div className="buttons-container">
        <div className="single-button">
          <Button
            title={"Encrypt and upload"}
            onClick={() => onClickEncrypt()}
          />
        </div>
        <div className="single-button">
          <Button
            style={"button-color-2"}
            title={"Download and decrypt"}
            onClick={() => onClickDecrypt()}
          />
        </div>
      </div>
    </div>
  );
};
