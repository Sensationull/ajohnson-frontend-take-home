import SearchIcon from "./SearchIcon";
import PlusIcon from "./PlusIcon";

import styles from "./SearchBar.module.css";
import { SearchBarProps } from "../helpers/types";

const SearchBar = ({ searchQuery, onChange }: SearchBarProps) => {
  return (
    <div className={styles.searchBarContainer} role="search">
      <span className={styles.searchBar}>
        <SearchIcon />
        <input
          className={styles.input}
          placeholder="Search by name..."
          value={searchQuery}
          onChange={onChange}
          aria-label="search bar"
        />
      </span>
      <button className={styles.addUserButton}>
        <PlusIcon />
        Add user
      </button>
    </div>
  );
};

export default SearchBar;
