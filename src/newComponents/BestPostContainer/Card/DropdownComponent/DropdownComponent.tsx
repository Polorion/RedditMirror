import React, { useEffect, useRef, useState } from "react";
import styles from "./DropdownComponent.module.css";
import ReactDOM from "react-dom";

interface IDropdownComponent {
  button: any;
  list: any;
  isOpen: boolean;
  clickOpenOrCloced: any;
}

const DropdownComponent = ({
  button,
  list,
  isOpen,
  clickOpenOrCloced,
}: IDropdownComponent) => {
  useEffect(() => {}, []);
  const [coordinat, setCoordinats] = useState({});

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className={styles.bodyDropdown}>
      <div
        onClick={() => {
          if (ref.current) {
            setCoordinats(ref.current.getBoundingClientRect());
            clickOpenOrCloced(!isOpen);
          }
        }}
      >
        {button}
      </div>
      {isOpen && (
        <List
          list={list}
          clickOpenOrCloced={clickOpenOrCloced}
          coordinat={coordinat}
        />
      )}
    </div>
  );
};

export default DropdownComponent;

interface IList {
  coordinat: any;
  clickOpenOrCloced: any;
  list: any;
}

const List = (props: IList) => {
  const node = document.querySelector("#modal_root");
  if (!node) return null;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.style.top = props.coordinat.y + 20 + window.scrollY + "px";
      ref.current.style.left = props.coordinat.x - 130 + "px";
      ref.current.style.display = "block";
    }
  }, []);

  return ReactDOM.createPortal(
    props.coordinat && (
      <div ref={ref} className={styles.containerListDropdown}>
        <div
          onClick={() => {
            props.clickOpenOrCloced(false);
          }}
          className={styles.listDropdown}
        >
          {props.list}
        </div>
      </div>
    ),
    node
  );
};
