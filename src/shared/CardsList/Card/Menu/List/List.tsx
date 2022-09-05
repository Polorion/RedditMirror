import React from "react";
import { Icon, EIcons } from "../../../../../utils/ui/Icon/Icon";
import Styles from "./List.css";

const classNameElementsDesctop = `${Styles.dropdownItem} ${Styles.dropdownItemWithIcon} ${Styles.mobHide}`;
const classNameElementsMobile = `${Styles.dropdownItem} ${Styles.dropdownItemWithIcon}`;
const classNameElementClose = `${Styles.dropdownItem} ${Styles.close}`;

export const list = [
  {
    As: "button" as const,
    listElement: (
      <>
        <Icon name={EIcons.comment} className={Styles.icon} size={14} />
        Комментарии
      </>
    ),
    className: classNameElementsDesctop,
  },
  {
    As: "button" as const,
    listElement: (
      <>
        <Icon name={EIcons.share} className={Styles.icon} size={14} />
        Поделиться
      </>
    ),
    className: classNameElementsDesctop,
  },
  {
    As: "button" as const,
    listElement: (
      <>
        <Icon name={EIcons.hide} className={Styles.icon} size={14} />
        Скрыть
      </>
    ),
    className: classNameElementsDesctop,
  },
  {
    As: "button" as const,
    listElement: (
      <>
        <Icon name={EIcons.save} className={Styles.icon} size={14} />
        Сохранить
      </>
    ),
    className: classNameElementsMobile,
  },
  {
    As: "button" as const,
    listElement: (
      <>
        <Icon name={EIcons.complein} className={Styles.icon} size={14} />
        Пожаловаться
      </>
    ),
    className: classNameElementsMobile,
  },
  {
    As: "button" as const,
    listElement: "Закрыть",
    className: classNameElementClose,
  },
];
