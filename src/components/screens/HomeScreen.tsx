import React, { useState, useEffect } from "react";
import * as crypto from "crypto";
import { saveAs } from "file-saver";
import axios from "axios";

import * as Encrypt from "../../encription/excription";
import { encryptAndUpload } from "../../encription/encryptAndUpload";
import { useHistory } from "react-router-dom";
import "./Screens.css";

//components
import { DropZone } from "../dropzone/DropZone";
import { Button } from "../button/Button";

export const HomeScreen: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  // const [loadedFile, setLoadedFile] = useState<File>()
  const [loaded, setLoaded] = useState<ArrayBuffer | null>();

  const history = useHistory();

  const key = "asdasdasdasdasdasdasdasdasdasdas"; //= crypto.randomBytes(32); //
  const iv = "asdasdasasdasdas"; //"asdasdasasdasdas"crypto.randomBytes(8).toString("hex");

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLoaded(reader.result as ArrayBuffer);
        // console.log("loaded: ", loaded);
      };
      reader.readAsArrayBuffer(file);
    } else {
      setLoaded(null);
    }
  }, [file]);
  const onClickEncrypt = async () => {
    console.log("onClickEncrypt");
    if (loaded && file) {
      try {
        history.push("/encryption");
        await encryptAndUpload(loaded, file.name, file.type);
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("HomeScreen: encrypt: no file");
    }
  };
  const onClickDecrypt = async () => {
    console.log("onClickDecrypt");
    history.push("/decryption");
  };

  // const onClickEncrypt = async () => {
  //   if (loaded && file) {
  //     try {
  //       console.log("loaded: ", toBuffer(loaded));
  //       console.log("key, iv: ", key, iv);
  //       const encrypted = Encrypt.encryptFile(toBuffer(loaded), key, iv);
  //       console.log("encrypted: ", encrypted);
  //       // const decrypted = Encrypt.decryptFile(encrypted as Buffer, key, iv);
  //       // console.log("decrypted: ", decrypted);

  //       const blob = new Blob([encrypted as BlobPart]);

  //       const data = new FormData();
  //       data.append("file", blob, file.name);

  //       data.append("name", file.name);
  //       data.append("mime", file.type);
  //       data.append("iv", iv);

  //       const serverRes = await axios({
  //         method: "post",
  //         data: data,
  //         url: "http://localhost:8080/v1/files/",
  //       });
  //       console.log(serverRes);
  //       // saveAs(blob, "encrypted");
  //     } catch (err) {
  //       console.error(err);
  //     }

  //     // const decrypted = Encrypt.decryptFile(encrypted, key, iv);
  //   } else {
  //     console.log("HomeScreen: encrypt: no file");
  //   }
  // };

  // const onClickDecrypt = () => {
  //   if (loaded) {
  //     console.log("loaded: ", toBuffer(loaded));
  //     console.log("key, iv: ", key, iv);
  //     const decrypted = Encrypt.decryptFile(toBuffer(loaded), key, iv);
  //     console.log("decrypted: ", decrypted);
  //     const blob = new Blob([decrypted as BlobPart]);
  //     saveAs(blob, "decrypted");
  //   } else {
  //     console.log("HomeScreen: encrypt: no file");
  //   }
  // };

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
