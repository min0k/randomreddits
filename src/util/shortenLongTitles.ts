export default function shortenLongTitles(
  title: string,
  maxCharacterNumber: number
) {
  if (title.length > maxCharacterNumber) {
    const shortenedTitle = title.slice(0, maxCharacterNumber);
    const shortenedTitleWithEllipsis = shortenedTitle.concat("...");
    return shortenedTitleWithEllipsis;
  } else {
    return title;
  }
}
