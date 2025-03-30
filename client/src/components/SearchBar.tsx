import SearchIcon from "./SearchIcon";
import PlusIcon from "./PlusIcon";

import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBarContainer}>
      <span className={styles.searchBar}>
        <SearchIcon />
        <input className={styles.input} placeholder="Search by name..." />
      </span>
      <button className={styles.addUserButton}>
        <PlusIcon />
        Add user
      </button>
    </div>
  );
};

export default SearchBar;
