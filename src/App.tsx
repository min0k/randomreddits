import styles from "./App.module.css";
import ReturnPostCard from "./components/ReturnPostCard";
import React from "react";

const NUMBER_OF_CARDS = 10;

// TODO
// Implmement Randomize feature. Force re-render?

function App() {
  const RandomReddits = [...Array(NUMBER_OF_CARDS)].map((e, i) => (
    <ReturnPostCard key={i} />
  ));

  return (
    <div className={styles.app}>
      <button
        className={styles.randomizeButton}
        onClick={() => window.location.reload()}
      >
        Randomize
      </button>
      <div className={styles.postContainer}>{RandomReddits}</div>
    </div>
  );
}

export default App;
