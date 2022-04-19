import dayjs from 'dayjs';

export const useDayFormatter = (date: string) =>
  dayjs(date).format('DD-MM-YYYY');
