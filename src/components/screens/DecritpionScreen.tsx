import React from "react";

import "./Screens.css";

//components
import { Input } from "../textInput/Input";
import { Button } from "../button/Button";

export const DecriptionScreen: React.FC = () => {
  return (
    <div className="screen-container decription-width ">
      {/* <div className="encription-label-input">
        <label className="text">Your file id:</label>
        <Input value={"init"} onChange={() => {}} />
      </div>
      <div className="decription-button-container">
        <Button
          style={"decription-screen-button"}
          title={"Get file"}
          onClick={() => {}}
        />
      </div> */}
      <div className="decription-label-input">
        <label className="text">Your file id:</label>
        <Input value={"init"} onChange={() => {}} />
      </div>
      <div className="decription-label-input">
        <label className="text">Your file id:</label>
        <Input value={"init"} onChange={() => {}} />
      </div>
      <div className="decription-label-input">
        <label className="text">Your file id:</label>
        <Input value={"init"} onChange={() => {}} />
      </div>
      <div className="decription-label-input">
        <label className="text">Your file id:</label>
        <Input value={"init"} onChange={() => {}} />
      </div>

      <div className="encription-label-input">
        <label className="text">Your file id:</label>
        <Input value={"init"} onChange={() => {}} />
      </div>
      <div className="decription-button-container">
        <Button
          style={"decription-screen-button"}
          title={"Decrypt and download"}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};
