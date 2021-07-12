import React from "react";

import "./Button.css";

interface Props {
  style?: string;
  title: string;
  onClick: () => void;
}

export const Button: React.FC<Props> = ({ style, title, onClick }) => {
  return (
    <button className={style + " button-standard text"} onClick={onClick}>
      {title}
    </button>
  );
};
