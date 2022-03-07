import "./App.css";
import React from "react";
import getRedditData from "./api/getRedditData";
import PostCard from "./components/PostCard";

function App() {
  const [redditPost, setRedditPost] = React.useState<any>();

  React.useEffect(() => {
    getRedditData().then((res) => setRedditPost(res));
  }, []);

  console.log(redditPost);

  return (
    <div className="App">
      {redditPost === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <PostCard
          title={redditPost.title}
          author_name={redditPost.author}
          post_text={redditPost.selftext}
          awards={redditPost.all_awardings.length}
          permalink={redditPost.permalink}
        />
      )}
    </div>
  );
}

export default App;
