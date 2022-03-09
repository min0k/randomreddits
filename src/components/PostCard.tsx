import styles from "./PostCard.module.css";

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
    <div className={styles.cardContainer}>
      <h1 className={styles.title}>{props.title}</h1>
      <h2 className={styles.author}>Author: {props.author}</h2>
      <p className={styles.subreddit}>Subreddit: {props.subreddit}</p>
      <p className={styles.awards}># of Awards: {props.all_awardings.length}</p>
      <a className={styles.link} href={`${REDDIT_LINK}/${props.permalink}`}>
        Link to post
      </a>
    </div>
  );
}
