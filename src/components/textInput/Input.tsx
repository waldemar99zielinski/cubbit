import React, { useRef } from "react";

import "./Input.css";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: JSX.Element;
}

export const Input: React.FC<Props> = ({ value, onChange, children }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    //focus only if ref is not null
    inputRef?.current?.focus();
  };

  return (
    <div className="input-with-button-container" onClick={() => focusInput()}>
      <input
        type="text"
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e)}
        className="input text"
      ></input>
      {children}
    </div>
  );
};
