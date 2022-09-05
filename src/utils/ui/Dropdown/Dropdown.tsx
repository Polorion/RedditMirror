import React, { FC } from "react";
import ReactDOM from "react-dom";
import styles from "./Dropdown.css";

interface DropdownProps {
  children: React.ReactNode;
  listClassName?: string;
  handle?: () => void;
  positionLeft: number;
  positionTop: number;
}

export const Dropdown: FC<DropdownProps> = ({
  children,
  listClassName = "",
  handle,
  positionLeft,
  positionTop,
}) => {
  const node = document.querySelector("#dropdown_root");
  if (!node) return null;

  return ReactDOM.createPortal(
    <div
      className={`${styles.container} ${listClassName}`}
      onClick={handle}
      style={{ left: positionLeft, top: positionTop }}
    >
      {children}
    </div>,
    node
  );
};
