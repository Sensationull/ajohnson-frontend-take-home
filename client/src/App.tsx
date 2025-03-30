import Header from "./components/Header";
import styles from "./App.module.css";

function App() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.components}>
        <Header />
      </div>
    </main>
  );
}

export default App;
