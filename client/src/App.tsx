import Header from "./components/Header";
import styles from "./App.module.css";
import SearchBar from "./components/SearchBar";
import ManageUsers from "./components/ManageUsers";
import { BaseSyntheticEvent, useState } from "react";
import { useDebouncedValue } from "./hooks/useDebouncedValue";
import ManageRoles from "./components/ManageRoles";
import { Tab } from "./helpers/types";

const tabs = [
  { id: "users", name: "Users" },
  { id: "roles", name: "Roles" },
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedValue] = useDebouncedValue(searchQuery);

  const handleChange = (event: BaseSyntheticEvent) => {
    const target = event.target.value;
    setSearchQuery(target);
  };

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const usersActive = activeTab === tabs[0].id;
  const rolesActive = activeTab === tabs[1].id;

  const selectTab = (tab: Tab) => {
    setActiveTab(tab.id);
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.components}>
        <Header selectTab={selectTab} activeTab={activeTab} tabs={tabs} />
        <SearchBar searchQuery={searchQuery} onChange={handleChange} />
        {usersActive && <ManageUsers searchTerm={debouncedValue} />}
        {rolesActive && <ManageRoles />}
      </div>
    </main>
  );
}

export default App;
