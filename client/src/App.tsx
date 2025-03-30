import { useState } from "react";
import styles from "./App.module.css";
import clsx from "clsx";

function App() {
  const [isSelected, setIsSelected] = useState(true);
  const selectTab = () => {
    setIsSelected(!isSelected);
  };
  return (
    <main className={styles.mainContainer}>
      <div className={styles.components}>
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
      </div>
    </main>
  );
}

export default App;
