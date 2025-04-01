import Header from "./components/Header";
import styles from "./App.module.css";
import SearchBar from "./components/SearchBar";
import ManageUsers from "./components/ManageUsers";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import { useDebouncedValue } from "./hooks/useDebouncedValue";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedValue] = useDebouncedValue(searchQuery);

  useEffect(() => {
    console.log({ searchQuery, debouncedValue });
  }, [searchQuery, debouncedValue]);

  const handleChange = (event: BaseSyntheticEvent) => {
    const target = event.target.value;
    setSearchQuery(target);
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.components}>
        <Header />
        <SearchBar searchQuery={searchQuery} onChange={handleChange} />
        <ManageUsers searchTerm={debouncedValue} />
      </div>
    </main>
  );
}

export default App;
