import styles from "./PostCard.module.css";

interface IProps {
  title: string;
  author: string;
  permalink: string;
  subreddit: string;
}

const REDDIT_LINK = "https://www.reddit.com";

export default function PostCard(props: IProps) {
  return (
    <div className={styles.cardContainer}>
      <p className={styles.subreddit}>r/{props.subreddit}</p>
      <h1 className={styles.title}>{props.title}</h1>
      <h2 className={styles.author}>by {props.author}</h2>
      <a className={styles.link} href={`${REDDIT_LINK}/${props.permalink}`}>
        Link to post
      </a>
    </div>
  );
}
