import React from "react";

import "./Screens.css";

//components
import { DropZone } from "../dropzone/DropZone";
import { Button } from "../button/Button";
export const HomeScreen: React.FC = () => {
  const onClickEncrypt = () => {};
  const onClickDecrypt = () => {};
  return (
    <div className="screen-container ">
      <p className="text body-text">
        {
          '^#5 -"$#=.-+(-$=%(+$=$-"18/3(.-= -#=#$"18/3(.-K=p$"41$= -8=%(+$=38/$= -#=, (-3 (-=8.41=/1(5 "8>'
        }
      </p>
      <DropZone />
      <div className="buttons-container">
        <div className="single-button">
          <Button title={"Encrypt and upload"} onClick={() => onClickEncrypt} />
        </div>
        <div className="single-button">
          <Button
            style={"button-color-2"}
            title={"Download and decrypt"}
            onClick={() => onClickEncrypt}
          />
        </div>
      </div>
    </div>
  );
};
