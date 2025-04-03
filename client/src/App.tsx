import { BaseSyntheticEvent, useState } from "react";
import Tabs from "./components/Tab/Tabs";
import styles from "./App.module.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ManageUsers from "./components/Users/ManageUsers";
import { useDebouncedValue } from "./hooks/useDebouncedValue";
import ManageRoles from "./components/Roles/ManageRoles";
import { Tab } from "./helpers/types";
import EntryAnimationWrapper from "./components/Wrappers/EntryAnimationWrapper";

const tabs = [
  { id: "users", name: "Users" },
  { id: "roles", name: "Roles" },
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedValue] = useDebouncedValue(searchQuery);
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const usersActive = activeTab === tabs[0].id;
  const rolesActive = activeTab === tabs[1].id;

  const handleChange = (event: BaseSyntheticEvent) => {
    const target = event.target.value;
    setSearchQuery(target);
  };

  const selectTab = (tab: Tab) => {
    setActiveTab(tab.id);
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.components}>
        <Tabs selectTab={selectTab} activeTab={activeTab} tabs={tabs} />
        <EntryAnimationWrapper>
          {usersActive && (
            <>
              <SearchBar searchQuery={searchQuery} onChange={handleChange} />
              <ManageUsers searchTerm={debouncedValue} />
            </>
          )}
          {rolesActive && <ManageRoles />}
        </EntryAnimationWrapper>
      </div>
    </main>
  );
}

export default App;
