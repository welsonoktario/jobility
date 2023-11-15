import { HStack, Select } from '@chakra-ui/react';

export type DatePickerChange = {
  day?: number;
  month?: {
    value: number;
    label: string;
  };
  year?: number;
};

export type DatePickerProps = {
  day?: number;
  month?: number;
  year?: number;
  variant?: 'full' | 'monthYear';
  onChange: (date: DatePickerChange) => void;
};

export function DatePicker({ day, month, year, variant = 'full', onChange }: DatePickerProps) {
  const months: Record<number, string> = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  };

  const getYears = () => {
    let tempArr = [];

    for (let i = new Date().getFullYear(); i >= new Date().getFullYear() - 64; i -= 1) {
      tempArr.push(i.toString());
    }

    return tempArr;
  };

  function getDays() {
    if (!month && !year) {
      return [];
    }

    if (month! < 1 || month! > 12) {
      throw new Error('Invalid month. Month must be between 1 and 12.');
    }

    const daysArray: number[] = [];
    const date: Date = new Date(year!, month! - 1, 1);

    while (date.getMonth() === month! - 1) {
      const day: number = date.getDate();
      daysArray.push(day);
      date.setDate(day + 1);
    }

    return daysArray;
  }

  return (
    <HStack>
      {variant === 'full' ? (
        <Select
          placeholder="Day"
          value={day}
          onChange={(e) => {
            onChange({
              day: Number(e.target.value),
              month: month
                ? {
                    value: month,
                    label: months[month],
                  }
                : undefined,
              year,
            });
          }}
        >
          {month && year
            ? getDays().map((day, idx) => (
                <option key={idx} value={day}>
                  {day}
                </option>
              ))
            : null}
        </Select>
      ) : null}
      <Select
        placeholder="Month"
        value={month}
        onChange={(e) => {
          onChange({
            day,
            month: {
              value: Number(e.target.value),
              label: months[Number(e.target.value)],
            },
            year,
          });
        }}
      >
        {Object.entries(months).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </Select>
      <Select
        placeholder="Year"
        value={year}
        onChange={(e) => {
          onChange({
            day,
            month: month
              ? {
                  value: month,
                  label: months[month],
                }
              : undefined,
            year: Number(e.target.value),
          });
        }}
      >
        {getYears().map((year, idx) => (
          <option key={idx} value={year}>
            {year}
          </option>
        ))}
      </Select>
    </HStack>
  );
}
