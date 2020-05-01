export default function formatDate(d: Date) {
  const year = d.getFullYear();
  const month = d.getMonth();
  const day = d.getDay();

  return `${year}年${month}月${day}日`;
}