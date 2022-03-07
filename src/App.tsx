import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // React.useEffect(() => {
  //   async function getData() {
  //     const res = await fetch("https://www.reddit.com/random.json");
  //     const data = await res.json();
  //     const post = data[0].data.children[0].data;
  //     console.log(post);
  //   }
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
