export default function filterBooks(books, filterObject) {
  const filterConditions = [];
  const { titleAndAuthor, genre } = filterObject;

  if (titleAndAuthor !== '') {
    filterConditions.push((book) => (
      book.title.toLowerCase().includes(titleAndAuthor.toLowerCase())
      || book.author.toLowerCase().includes(titleAndAuthor.toLowerCase())
    ));
  }

  if (genre !== 'Все жанры') {
    filterConditions.push((book) => book.genre === genre);
  }

  return books.filter((book) => filterConditions.every((condition) => condition(book)));
}
