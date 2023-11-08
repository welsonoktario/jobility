import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export function formatRupiah(num: Number) {
  return num.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}

export function relativeDateTime(input: string | Date) {
  dayjs.extend(relativeTime);
  const date = dayjs(input);

  return dayjs().to(date);
}
