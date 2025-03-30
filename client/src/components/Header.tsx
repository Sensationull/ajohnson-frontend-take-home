import clsx from "clsx";
import { useState } from "react";

import styles from "./Header.module.css";

const Header = () => {
  const [isSelected, setIsSelected] = useState(true);
  const selectTab = () => {
    setIsSelected(!isSelected);
  };
  return (
    <nav className={styles.headerNav}>
      <ul className={styles.tabs}>
        <li
          className={clsx(styles.listItem, {
            [styles.isSelected]: isSelected,
          })}
          onClick={selectTab}
        >
          Users
        </li>
        <li
          className={clsx(styles.listItem, {
            [styles.isSelected]: !isSelected,
          })}
          onClick={selectTab}
        >
          Roles
        </li>
        {/* <li className={styles.slider}></li> */}
      </ul>
      <div className={styles.borderBar}>
        <span className={styles.slider}></span>
      </div>
    </nav>
  );
};

export default Header;
