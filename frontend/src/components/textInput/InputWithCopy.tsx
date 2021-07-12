import React, { useState, useEffect } from "react";

import "./Input.css";

import { Button } from "../button/Button";
import { Input } from "./Input";
interface Props {
  value: string;
}

export const InputWithCopy: React.FC<Props> = ({ value }) => {
  const [input, setInput] = useState<string>("");

  //prevent modyfying input as its to be copied
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setInput(e.target.value);
  };
  useEffect(() => {
    setInput(value);
  }, [value]);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(input);
  };

  return (
    <Input value={input} onChange={handleChangeInput}>
      <Button
        style="button-copy"
        title="Copy"
        onClick={() => copyToClipboard()}
      />
    </Input>
  );
};
