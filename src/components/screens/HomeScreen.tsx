import React, { useState, useEffect } from "react";
import * as crypto from "crypto";
import * as Encrypt from "../../encription/excription";
import "./Screens.css";
import { saveAs } from "file-saver";

//components
import { DropZone } from "../dropzone/DropZone";
import { Button } from "../button/Button";

export const HomeScreen: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  // const [loadedFile, setLoadedFile] = useState<File>()
  const [loaded, setLoaded] = useState<ArrayBuffer | null>();

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

  const onClickEncrypt = () => {
    if (loaded) {
      try {
        console.log("loaded: ", toBuffer(loaded));
        console.log("key, iv: ", key, iv);
        const encrypted = Encrypt.encryptFile(toBuffer(loaded), key, iv);
        console.log("encrypted: ", encrypted);
        // const decrypted = Encrypt.decryptFile(encrypted as Buffer, key, iv);
        // console.log("decrypted: ", decrypted);

        const blob = new Blob([encrypted as BlobPart]);
        saveAs(blob, "encrypted");
      } catch (err) {
        console.error(err);
      }

      // const decrypted = Encrypt.decryptFile(encrypted, key, iv);
    } else {
      console.log("HomeScreen: encrypt: no file");
    }
  };
  function toBuffer(ab: ArrayBuffer) {
    let buf = Buffer.alloc(ab.byteLength);
    let view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
      buf[i] = view[i];
    }
    return buf;
  }

  const onClickDecrypt = () => {
    if (loaded) {
      console.log("loaded: ", toBuffer(loaded));
      console.log("key, iv: ", key, iv);
      const decrypted = Encrypt.decryptFile(toBuffer(loaded), key, iv);
      console.log("decrypted: ", decrypted);
      const blob = new Blob([decrypted as BlobPart]);
      saveAs(blob, "decrypted");
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
