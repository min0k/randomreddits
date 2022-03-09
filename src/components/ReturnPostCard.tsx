import React from "react";
import getRedditData from "../api/getRedditData";
import PostCard from "./PostCard";
import styles from "./PostCard.module.css";
import Spinner from "react-bootstrap/Spinner";

export default function ReturnPostCard() {
  const [redditPost, setRedditPost] = React.useState<any>();

  React.useEffect(() => {
    getRedditData().then((res: any) => setRedditPost(res));
  }, []);

  if (redditPost === undefined) {
    return (
      <div className={styles.cardContainer}>
        <Spinner animation="border" size="sm" variant="secondary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div>
      <PostCard
        title={redditPost.title}
        author={redditPost.author}
        permalink={redditPost.permalink}
        subreddit={redditPost.subreddit}
      />
    </div>
  );
}
