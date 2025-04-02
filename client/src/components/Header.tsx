import clsx from "clsx";

import styles from "./Header.module.css";
import { HeaderProps } from "../helpers/types";

const Header = ({ selectTab, tabs, activeTab }: HeaderProps) => {
  return (
    <nav className={styles.headerNav}>
      <ul className={styles.tabs}>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            onClick={() => selectTab(tab)}
            className={clsx(styles.listItem, {
              [styles.isSelected]: activeTab === tab.id,
            })}
          >
            {tab.name}
          </li>
        ))}
      </ul>
      <div className={styles.borderBar}>
        <span className={styles.slider}></span>
      </div>
    </nav>
  );
};

export default Header;
