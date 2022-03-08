import React from "react";

interface IProps {
  title: string;
  author_name: string;
  awards: boolean;
  permalink: string;
  subreddit: string;
}

export default function PostCard(props: IProps) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.author_name}</h2>
      <p>{props.subreddit}</p>
      <p>{props.awards}</p>
      <a href={`https://www.reddit.com/${props.permalink}`}>Link to post</a>
    </div>
  );
}
