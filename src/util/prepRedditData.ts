import { IRedditData } from "../Interface";

export default function prepRedditData(obj: IRedditData) {
  return {
    title: obj.title,
    author: obj.author,
    permalink: obj.permalink,
    subreddit: obj.subreddit,
  };
}
