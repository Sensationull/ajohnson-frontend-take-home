import clsx from "clsx";
import * as motion from "motion/react-client";

import styles from "../Tab/Tabs.module.css";
import { TabsProps } from "../../helpers/types";

const Tabs = ({ selectTab, tabs, activeTab }: TabsProps) => {
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
            {tab.id === activeTab ? (
              <motion.div
                layoutId="slider"
                className={styles.slider}
                id="underline"
              />
            ) : null}
          </li>
        ))}
      </ul>
      <div className={styles.borderBar}></div>
    </nav>
  );
};

export default Tabs;
