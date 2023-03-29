import React, { useState } from 'react';
import { getMonth, getYear, getDate } from 'date-fns';
import ru from 'date-fns/locale/ru';
import DatePicker from 'react-datepicker';
import TextFieldMask from '../TextFieldMask/TextFieldMask';
import Button from '../Button/Button';
import classNames from 'classnames';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.scss';

type ISelectsRange = {
  name: string;
  mask: string;
  selectsRange?: boolean;
  inline?: boolean;
};

type IOnChangeRange = [Date | null, Date | null];
type IOnChangeSingle = Date | null;

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

const DatePickerCustom = ({
  name,
  selectsRange,
  inline,
  mask,
}: ISelectsRange) => {
  const [openedMonth, setOpenedMonth] = useState(false);
  const [openedYear, setOpenedYear] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [inputArrow, setInputArrow] = useState('expand_less');
  const onChange = (dates: IOnChangeRange | IOnChangeSingle) => {
    if (Array.isArray(dates)) {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    } else {
      setStartDate(dates);
    }
  };
  const clean = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const handleCalendarClose = () => setInputArrow('expand_less');
  const handleCalendarOpen = () => setInputArrow('expand_more');

  const classesHidenMonths = classNames(
    'date-picker__hiden-months',
    openedMonth && 'date-picker__hiden-months--open'
  );
  const classesHidenYears = classNames(
    'date-picker__hiden-years',
    openedYear && 'date-picker__hiden-years--open'
  );
  const classesBtnArrow = classNames('material-icons', 'date-picker__arrow');
  const classesInputArrow = classNames(
    'material-icons',
    'date-picker__input-arrow',
    inline && 'date-picker__input-arrow--disable'
  );
  return (
    <div className={'date-picker__wrapper'}>
      <DatePicker
        inline={inline}
        customInput={<TextFieldMask mask={mask} name={name} />}
        locale={ru}
        selected={startDate}
        className={'text-field__input'}
        dateFormat="dd.MM.yyyy"
        placeholderText="ДД.ММ.ГГГГ"
        renderDayContents={renderDayContents}
        selectsRange={selectsRange}
        onChange={(dates) => onChange(dates)}
        startDate={startDate}
        endDate={endDate}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
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
            <button
              className={classesBtnArrow}
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              arrow_back
            </button>

            <div className={'date-picker__months'}>
              <div
                className={'date-picker__title-month'}
                onClick={() => setOpenedMonth(!openedMonth)}
              >
                {months[getMonth(date)]}
              </div>

              <ul className={classesHidenMonths}>
                {months.map((month, index) => {
                  return (
                    <li
                      className={'date-picker__month'}
                      id={index.toString()}
                      key={month}
                      data-value={month}
                      onClick={(event: React.MouseEvent<HTMLElement>) => {
                        const dataValue = (event.target as HTMLElement).getAttribute('data-value');
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

            <div className={'date-picker__years'}>
              <div
                className={'date-picker__title-year'}
                onClick={() => setOpenedYear(!openedYear)}
              >
                {date.getFullYear()}
              </div>

              <ul className={classesHidenYears}>
                {years.map((year, index) => {
                  return (
                    <li
                      className={'date-picker__year'}
                      id={index.toString()}
                      key={year}
                      data-value={year}
                      onClick={(event: React.MouseEvent<HTMLElement>) => {
                        const dataValue = (event.target as HTMLElement).getAttribute('data-value');
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

            <button
              className={classesBtnArrow}
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              arrow_forward
            </button>
          </div>
        )}
      >
        <div className={'date-picker__btns'}>
          <Button type="link" onClick={clean}>
            Очистить
          </Button>
          <Button type="link" onClick={() => onChange}>
            Принять
          </Button>
        </div>
      </DatePicker>
      <div className={classesInputArrow}>{inputArrow}</div>
    </div>
  );
};

export default DatePickerCustom;
