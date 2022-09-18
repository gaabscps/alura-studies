import React from "react";
import "../style.scss";

interface ButtonProps {
  children: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  const type = props.type || "button";
  return (
    <div className="button-container">
      <button type={type} className="botao" onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};
