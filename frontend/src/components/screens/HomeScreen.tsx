import React, { useEffect, Dispatch } from "react";

import { useHistory } from "react-router-dom";
import "./Screens.css";

//components
import { DropZone } from "../dropzone/DropZone";
import { Button } from "../button/Button";
import Body from "../text/Body";

interface Props {
  loaded: any;
  setLoaded: Dispatch<any>;
  file: any;
  setFile: Dispatch<any>;
}

export const HomeScreen: React.FC<Props> = ({
  loaded,
  setLoaded,
  file,
  setFile,
}) => {
  // const [file, setFile] = useState<File | null>(null);

  // const [loaded, setLoaded] = useState<ArrayBuffer | null>();

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
  }, [file, setLoaded]);

  const onClickDecrypt = async () => {
    history.push("/decryption");
  };

  const encrypt = async () => {
    if (file && loaded) {
      history.push("/encryption");
    }
  };

  const onClickEncrypt = async () => {
    if (loaded && file) {
      await encrypt();
      history.push("/encryption");
    } else {
      alert("No file selected, please select file!");
      console.error("HomeScreen: encrypt: no file");
    }
  };

  return (
    <div className="screen-container ">
      {/* <p className="text body-text">
        {
          '^#5 -"$#=.-+(-$=%(+$=$-"18/3(.-= -#=#$"18/3(.-K=p$"41$= -8=%(+$=38/$= -#=, (-3 (-=8.41=/1(5 "8>'
        }
      </p> */}
      <Body />

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
