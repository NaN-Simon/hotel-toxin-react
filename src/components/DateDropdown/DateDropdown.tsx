import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import TextFieldMask from '../TextFieldMask/TextFieldMask';
import classNames from 'classnames';
import { getMonth, getYear, getDate } from 'date-fns';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DateDropdown.module.scss';
import './dateDropdown.scss';

const range = (start: number, end: number) => {
  return new Array(end - start).fill(undefined).map((d, i) => i + start);
};
const years = range(1990, getYear(new Date()));
const months = [
  'Январь',
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
  const [openedMonth, setOpenedMonth] = useState(false);
  const [openedYear, setOpenedYear] = useState(false);
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

  const classesHidenMonths = classNames(
    styles['date-picker__hiden-months'],
    openedMonth && styles['date-picker__hiden-months--open']
  );
  const classesHidenYears = classNames(
    styles['date-picker__hiden-years'],
    openedYear && styles['date-picker__hiden-years--open']
  );

  return (
    <div className={styles['text-field']}>
      <DatePicker
        customInput={
          <TextFieldMask
            mask="99.99.9999 - 99.99.9999"
            placeholder="ДД.ММ.ГГГГ"
            name="date2"
          />
        }
        locale={ru}
        className={styles['text-field__input']}
        dateFormat="dd.MM.yyyy"
        placeholderText="ДД.ММ.ГГГГ"
        renderDayContents={renderDayContents}
        selectsRange
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
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

            <div className={styles['date-picker__months']}>
              <div
                className={styles['date-picker__title-month']}
                onClick={() => setOpenedMonth(!openedMonth)}
              >
                {months[getMonth(date)]}
              </div>

              <ul className={classesHidenMonths}>
                {months.map((month, index) => {
                  return (
                    <li
                      className={styles['date-picker__month']}
                      id={index.toString()}
                      key={month}
                      data-value={month}
                      onClick={({ target }) => {
                        const dataValue = (
                          target as HTMLTextAreaElement
                        ).getAttribute('data-value');
                        dataValue && changeMonth(months.indexOf(dataValue));
                        setOpenedMonth(!openedMonth);
                      }}
                    >
                      {month}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className={styles['date-picker__years']}>
              <div
                className={styles['date-picker__title-year']}
                onClick={() => setOpenedYear(!openedYear)}
              >
                {date.getFullYear()}
              </div>

              <ul className={classesHidenYears}>
                {years.map((year, index) => {
                  return (
                    <li
                      className={styles['date-picker__year']}
                      id={index.toString()}
                      key={year}
                      data-value={year}
                      onClick={(event) => {
                        const dataValue = (
                          event.target as HTMLTextAreaElement
                        ).getAttribute('data-value');
                        dataValue && changeYear(+dataValue);
                        setOpenedYear(!openedYear);
                      }}
                    >
                      {year}
                    </li>
                  );
                })}
              </ul>
            </div>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {'>'}
            </button>
          </div>
        )}
      >
        <div className={styles['date-picker__btns']}>
          <button onClick={clean}>Очистить</button>
          <button onClick={()=> onChange}>Принять</button>
        </div>
      </DatePicker>
    </div>
  );
};

export default DateDropdown;
