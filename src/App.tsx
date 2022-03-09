import styles from "./App.module.css";
import ReturnPostCard from "./components/ReturnPostCard";

const NUMBER_OF_CARDS = 8;

function App() {
  const RandomReddits = [...Array(NUMBER_OF_CARDS)].map((e, i) => (
    <ReturnPostCard key={i} />
  ));

  return <div className={styles.app}>{RandomReddits}</div>;
}

export default App;
