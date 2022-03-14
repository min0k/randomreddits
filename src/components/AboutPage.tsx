import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <div className={styles.app}>
      <button
        className={styles.randomizeButton}
        onClick={() => window.location.reload()}
      >
        Randomize
      </button>

      <div className={styles.postContainer}>
        <h1 className={styles.text}>
          Made by{" "}
          <span>
            <a
              className={styles.portfolio}
              href="https://www.minokim.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mino Kim
            </a>
          </span>
        </h1>
        <h1 className={styles.text}>
          Made with: React, Typescript, CSS Modules, and Netlify Serverless
          Functions
        </h1>
        <h1>
          <a
            className={styles.portfolio}
            href="https://github.com/min0k/randomreddits"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </h1>
      </div>
    </div>
  );
}
