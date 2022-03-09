import "./App.css";
import React from "react";
import PostCard from "./components/PostCard";

const NUMBER_OF_CARDS = 10;

function App() {
  const RandomReddits = [...Array(NUMBER_OF_CARDS)].map((e, i) => <PostCard />);

  return <div className="App">{RandomReddits}</div>;
}

export default App;
