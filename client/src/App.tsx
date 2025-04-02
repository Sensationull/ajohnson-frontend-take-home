import Header from "./components/Header";
import styles from "./App.module.css";
import SearchBar from "./components/SearchBar";
import ManageUsers from "./components/ManageUsers";
import { BaseSyntheticEvent, useState } from "react";
import { useDebouncedValue } from "./hooks/useDebouncedValue";
import ManageRoles from "./components/ManageRoles";
import { Tab } from "./helpers/types";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

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
        {usersActive && (
          <AnimatePresence mode="wait">
            <motion.div
              key={usersActive ? usersActive : rolesActive}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ManageUsers searchTerm={debouncedValue} />
            </motion.div>
          </AnimatePresence>
        )}
        {rolesActive && (
          <AnimatePresence mode="wait">
            <motion.div
              key={usersActive ? usersActive : rolesActive}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ManageRoles />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </main>
  );
}

export default App;
