export default function filterBooks(books, filterObject) {
  const filterConditions = [];
  const { titleAndAuthor, genre } = filterObject;

  if (titleAndAuthor !== '') {
    filterConditions.push((book) => (
      book.title.toLowerCase().includes(titleAndAuthor.toLowerCase())
      || book.author.toLowerCase().includes(titleAndAuthor.toLowerCase())
    ));
  }

  return books.filter((book) => filterConditions.every((condition) => condition(book)));
}
