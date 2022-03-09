import React from "react";

interface IProps {
  title: string;
  author: string;
  all_awardings: string;
  permalink: string;
  subreddit: string;
}

const REDDIT_LINK = "https://www.reddit.com";

export default function PostCard(props: IProps) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>Author: {props.author}</h2>
      <p>Subreddit: {props.subreddit}</p>
      <p># of Awards: {props.all_awardings.length}</p>
      <a href={`${REDDIT_LINK}/${props.permalink}`}>Link to post</a>
    </div>
  );
}
