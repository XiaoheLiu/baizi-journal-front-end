import dayjs from 'dayjs';

export function formatDate(d) {
  const month = d.slice(5, 7).replace(/^0/, "");
  const day = d.slice(8).replace(/^0/, "");
  return `${d.slice(0, 4)}年 ${month}月 ${day}日`;
}

export const getToday = () => dayjs().format('YYYY-MM-DD');
