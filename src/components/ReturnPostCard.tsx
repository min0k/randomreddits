import React from "react";
import Spinner from "react-bootstrap/Spinner";

import PostCard from "./PostCard";
import styles from "./PostCard.module.css";
import { IRedditData } from "../Interface";

import shortenLongTitles from "../util/shortenLongTitles";
import prepRedditData from "../util/prepRedditData";
import getRedditData from "../api/getRedditData";

export default function ReturnPostCard() {
  const [redditPost, setRedditPost] = React.useState<IRedditData>();

  React.useEffect(() => {
    getRedditData()
      .then((res) => prepRedditData(res))
      .then((data) => setRedditPost(data));
  }, []);

  if (redditPost === undefined) {
    return (
      <div className={styles.cardContainer}>
        <Spinner animation="border" size="sm" variant="secondary" />
      </div>
    );
  }

  return (
    <div>
      <PostCard
        title={shortenLongTitles(redditPost.title, 140)}
        author={redditPost.author}
        permalink={redditPost.permalink}
        subreddit={redditPost.subreddit}
      />
    </div>
  );
}
