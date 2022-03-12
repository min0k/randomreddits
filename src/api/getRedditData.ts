const TURI =
  "https://randomreddits.netlify.app/.netlify/functions/get_reddit_data";

export default async function getRedditData() {
  try {
    const res = await fetch(TURI);
    const data = await res.json();
    const post = data[0].data.children[0].data;
    return post;
  } catch (err) {
    console.log(err);
  }
}
