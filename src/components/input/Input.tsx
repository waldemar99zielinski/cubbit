import React, { useState, useRef } from "react";

import "./Input.css";

import { Button } from "../button/Button";

interface Props {
  button?: React.FC;
}

export const Input: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const inputRef = useRef(null);

  const inputHanlder = (e: any) => {
    setInput(e.target.value);
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(input);

    console.log("copied! ", input);
  };

  return (
    <div className="input-with-button-container">
      <input
        type="text"
        ref={inputRef}
        value={input}
        onChange={(e) => inputHanlder(e)}
        className="input text"
      ></input>
      <Button
        style="button-copy"
        title="Copy"
        onClick={() => copyToClipboard()}
      />
    </div>
  );
};
