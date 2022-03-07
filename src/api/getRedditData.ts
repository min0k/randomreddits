export default async function getData() {
  try {
    const res = await fetch("https://www.reddit.com/random.json");
    const data = await res.json();
    const post = data[0].data.children[0].data;
    console.log(post);
  } catch (err) {
    console.log(err);
  }
}
