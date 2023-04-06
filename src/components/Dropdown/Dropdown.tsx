import React, { FC, useEffect, useState } from 'react';
import Counter from '../Counter/Counter';
import styles from './Dropdown.module.scss';
import classNames from 'classnames';
import Button from '../Button/Button';

const pluralGuests = ['гость', 'гостя', 'гостей'];
const pluralBedroom = ['спальня', 'спальни', 'спален'];
const pluralBed = ['кровать', 'кровати', 'кроватей'];

const dataGuests = [
  { id: 1, title: 'Взрослые', name: 'adult', value: 2 },
  { id: 2, title: 'Дети', name: 'child', value: 1 },
  { id: 3, title: 'Младенцы', name: 'baby', value: 0 },
];

const dataRoom = [
  { id: 1, title: 'Спальни', name: 'bedroom', value: 2 },
  { id: 2, title: 'Кровати', name: 'bed', value: 2 },
  { id: 3, title: 'Ванные комнаты', name: 'bathroom', value: 5 },
  { id: 4, title: 'Балконы', name: 'balcony', value: 1 },
];

interface IDropdownData {
  id: number;
  title: string;
  name: string;
  value: number;
}

interface IDropdown {
  isOpened?: boolean;
  preset?: string;
  hasBtn?: boolean;
}

const Dropdown: FC<IDropdown> = ({ isOpened, preset, hasBtn }) => {
  const dataPreset = preset === 'room' ? dataRoom : dataGuests;
  const valueSum = () => dataPreset.reduce((sum, cur) => sum + cur.value, 0);

  const [dataDropdown, setDataDropdown] = useState<IDropdownData[]>(dataPreset);
  const [opened, setOpened] = useState(isOpened);

  const classesDropdown = classNames(
    styles['dropdown'],
    opened && styles['dropdown--open-title']
  );
  const classesDropdownIcon = classNames(
    styles['dropdown__icon'],
    'material-icons'
  );
  const classesDropdownDrop = classNames(
    styles['dropdown__drop'],
    opened && styles['dropdown__open']
  );
  const classesBtnContainer = classNames(
    styles['dropdown__btn-container'],
    hasBtn && styles['dropdown__btn-container--has-btn']
  );
  const updateDropdown = (id: number, count: number) => {
    setDataDropdown(
      dataDropdown.map((counterItem) => {
        if (counterItem.id === id) {
          counterItem.value = count;
        }
        return counterItem;
      })
    );
  };

  const clearValue = () => {
    setDataDropdown(
      dataDropdown.map((counterItem) => {
        counterItem.value = 0;
        return counterItem;
      })
    );
  };

  const getPlural = (number: number, pluralPreset: string[]) => {
    let plural = ' ';
    if (number % 10 === 1) {
      plural += pluralPreset[0];
    } else if (number % 10 > 1 && number % 10 < 5) {
      plural += pluralPreset[1];
    } else {
      plural += pluralPreset[2];
    }
    return plural;
  };

  const placeholderGuests = () => {
    return valueSum() === 0
      ? 'Сколько гостей'
      : valueSum().toString() + getPlural(valueSum(), pluralGuests);
  };

  const placeholderRooms = () => {
    let result = `${dataRoom[0].value} ${getPlural(
      dataRoom[0].value,
      pluralBedroom
    )}, ${dataRoom[1].value} ${getPlural(dataRoom[1].value, pluralBed)}...`;

    return dataRoom[0].value !== 0 ? result : 'Сколько гостей';
  };

  return (
    <div className={classesDropdown}>
      <div
        className={styles['dropdown__title']}
        onClick={() => setOpened(!opened)}
      >
        <input
          className={styles['dropdown__input']}
          readOnly
          type="text"
          placeholder={
            preset === 'room' ? placeholderRooms() : placeholderGuests()
          }
          name="dropdown"
        />

        <span className={classesDropdownIcon}>
          {opened ? 'expand_more' : 'expand_less'}
        </span>
      </div>

      <div className={classesDropdownDrop}>
        {dataDropdown.map((item: IDropdownData) => {
          return (
            <Counter
              key={item.id}
              id={item.id}
              title={item.title}
              value={item.value}
              onChange={updateDropdown}
            />
          );
        })}
        <div className={classesBtnContainer}>
          {dataPreset[0].value === 0 ? (
            <div></div>
          ) : (
            <Button type="link" onClick={clearValue}>
              очистить
            </Button>
          )}
          <Button type="link">применить</Button>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
