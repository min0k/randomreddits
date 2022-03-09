import React from "react";
import getRedditData from "../api/getRedditData";
import PostCard from "./PostCard";

export default function ReturnPostCard() {
  const [redditPost, setRedditPost] = React.useState<any>();

  React.useEffect(() => {
    getRedditData().then((res: any) => setRedditPost(res));
  }, []);

  if (redditPost === undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <PostCard
        title={redditPost.title}
        author={redditPost.author}
        all_awardings={redditPost.all_awardings}
        permalink={redditPost.permalink}
        subreddit={redditPost.subreddit}
      />
    </div>
  );
}
