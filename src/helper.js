export default function formatDate(publishedAt) {
  const dateObj = new Date(publishedAt);

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const month = monthNames[dateObj.getMonth()];
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();

  return `Published on ${month} ${day}, ${year}`;
}
