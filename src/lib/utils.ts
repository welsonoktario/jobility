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

export function tryParseNumber(str: string) {
  const parsedValue = parseInt(str, 10);

  if (isNaN(parsedValue)) {
    return null;
  }

  return parsedValue;
}
