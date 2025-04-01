import Header from "./components/Header";
import styles from "./App.module.css";
import SearchBar from "./components/SearchBar";
import UserTable from "./UserTable";

function App() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.components}>
        <Header />
        <SearchBar />
        <UserTable />
      </div>
    </main>
  );
}

export default App;
