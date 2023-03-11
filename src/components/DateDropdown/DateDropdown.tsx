import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { getMonth, getYear, getDate } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import styles from './DateDropdown.module.scss';
import './mystyles.scss';
const range = (start: number, end: number) => {
  return new Array(end - start).fill(undefined).map((d, i) => i + start);
};
const years = range(1990, getYear(new Date()));
const months = [
  'Яеварь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const renderDayContents = (day: number, date: Date) => {
  return <span title={date.toString()}>{getDate(date)}</span>;
};

const DateDropdown = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const clean = () => {
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <div className={styles['text-field']}>
      <DatePicker
        locale={ru}
        className={styles['text-field__input']}
        dateFormat="dd.MM.yyyy"
        placeholderText="ДД.ММ.ГГГГ"
        renderDayContents={renderDayContents}
        // onChange={(date) => setStartDate(date)}
        // selected={startDate}
        selectsRange
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        isClearable
        // inline
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {'<'}
            </button>

            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(+value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {'>'}
            </button>
          </div>
        )}
      >
        <div className={styles['date-picker-btns']}>
          <button onClick={clean}>Очистить</button>
          <button>Принять</button>
        </div>
      </DatePicker>
    </div>
  );
};

export default DateDropdown;
