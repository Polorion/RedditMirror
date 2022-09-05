import React, { useState } from "react";
import styles from "./dropdown.css";

import dropdownIcon from "../../../../../assets/img/svgIcons";
import DropdownComponent from "../../../../helpers/DropdownComponent/DropdownComponent";
import GeneratorRandomString from "../../../../../utils/GeneratorRandomString";

export function DropDown() {
  const [stateDrop, setStateDrop] = useState(false);

  return (
    <div className={styles.body}>
      <DropdownComponent
        isOpen={stateDrop}
        clickOpenOrCloced={setStateDrop}
        button={
          <button className={styles.body_img}>{dropdownIcon.dropIcon}</button>
        }
        list={
          <ul className={styles.list}>
            {List.map((el) => (
              <li className={styles.listItem} key={GeneratorRandomString()}>
                <span className={styles.img}>{el.img}</span>
                <span>{el.name}</span>
              </li>
            ))}
          </ul>
        }
      />
    </div>
  );
}

const List = [
  {
    name: "Комментарии",
    img: dropdownIcon.message,
  },
  {
    name: "Поделиться",
    img: dropdownIcon.shared,
  },
  {
    name: "Скрыть",
    img: dropdownIcon.cancel,
  },
  {
    name: "Сохранить",
    img: dropdownIcon.add,
  },
  {
    name: "Пожаловаться",
    img: dropdownIcon.worning,
  },
];
