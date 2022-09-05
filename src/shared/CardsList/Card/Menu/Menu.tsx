import React, { FC, useState } from "react";
import { Dropdown } from "../../../../utils/ui/Dropdown/Dropdown";
import { GenericList } from "../../../../utils/ui/GenericList/GenericList";
import { EIcons, Icon } from "../../../../utils/ui/Icon/Icon";
import { list } from "./List/List";
import styles from "./Menu.css";

interface MenuProps {
  cardId?: number | string;
}

interface DropdownPos {
  left: number;
  top: number;
}

export const Menu: FC<MenuProps> = ({ cardId }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState<DropdownPos>({
    left: 0,
    top: 0,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any) => {
    setIsDropdownOpen(!isDropdownOpen);
    setDropdownPos({
      left: e.pageX - 150,
      top: e.pageY + 30,
    });
  };

  const DropdownList = list.map((obj, index) => {
    return { ...obj, id: index.toString(), onClick: () => console.log(cardId) };
  });

  return (
    <div className={styles.menu}>
      <button className={styles.menuButton} onClick={handleClick}>
        <Icon name={EIcons.menu} width="5" height="20" viewBox="0 0 5 20" />
      </button>
      {isDropdownOpen && (
        <Dropdown
          handle={() => {
            setIsDropdownOpen(false);
          }}
          listClassName={styles.dropdownList}
          positionLeft={dropdownPos.left}
          positionTop={dropdownPos.top}
        >
          <GenericList list={DropdownList} />
        </Dropdown>
      )}
    </div>
  );
};
