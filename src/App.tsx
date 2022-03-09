import "./App.css";
import React from "react";
import ReturnPostCard from "./components/ReturnPostCard";

const NUMBER_OF_CARDS = 2;

function App() {
  const RandomReddits = [...Array(NUMBER_OF_CARDS)].map((e, i) => (
    <ReturnPostCard key={i} />
  ));

  return <div className="App">{RandomReddits}</div>;
}

export default App;
