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

  const key = crypto.randomBytes(32); //"asdasdasdasdasdasdasdasdasdasdas"
  const iv = crypto.randomBytes(8).toString("hex"); //"asdasdasasdasdas"

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
      console.log("key, iv: ", key, iv);
      const encrypted = Encrypt.encryptFile(toBuffer(loaded), key, iv);
      console.log("encrypted: ", encrypted);
      const decrypted = Encrypt.decryptFile(encrypted as Buffer, key, iv);
      console.log("decrypted: ", decrypted);

      const blob = new Blob([decrypted as BlobPart]);
      saveAs(blob, "decrypted");
      // const decrypted = Encrypt.decryptFile(encrypted, key, iv);
    } else {
      console.log("HomeScreen: encrypt: no file");
    }
  };
  function toBuffer(ab: ArrayBuffer) {
    var buf = Buffer.alloc(ab.byteLength);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
      buf[i] = view[i];
    }
    return buf;
  }

  // function convertDataURIToBinary(dataURI: any) {
  //   var BASE64_MARKER = ";base64,";
  //   var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
  //   var base64 = dataURI.substring(base64Index);
  //   var raw = window.atob(base64);
  //   var rawLength = raw.length;
  //   var array = new Uint8Array(new ArrayBuffer(rawLength));

  //   for (let i = 0; i < rawLength; i++) {
  //     array[i] = raw.charCodeAt(i);
  //   }
  //   return array;
  // }
  const onClickDecrypt = () => {
    if (loaded) {
      console.log("key, iv: ", key, iv);
      const decrypted = Encrypt.decryptFile(Buffer.from(loaded), key, iv);
      console.log("decrypted: ", decrypted);

      const blob = new Blob([decrypted as BlobPart], { type: "imgae/png" });
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
        {console.log("loaded: ", loaded)}
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
