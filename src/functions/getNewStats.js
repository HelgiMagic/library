import getCurrentDate from './getCurrentDate';

export default function getNewStats(book, whoHas) {
  const newStats = [...book.statistics];

  if (whoHas === '') newStats.push({ name: book.whoHas, action: 'returned', date: getCurrentDate() });
  else newStats.push({ name: whoHas, action: 'took', date: getCurrentDate() });

  return newStats;
}
