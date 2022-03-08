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
          awards={redditPost.all_awardings.length}
          permalink={redditPost.permalink}
          subreddit={redditPost.subreddit}
        />
      )}
    </div>
  );
}

export default App;
