import React, { useState } from 'react';
import Counter from '../Counter/Counter';
import styles from './Dropdown.module.scss';
import classNames from 'classnames';

const pluralArray = ['гость', 'гостя', 'гостей'];

const dataPeople = [
  { id: 1, title: 'Взрослые', name: 'adult', value: 0 },
  { id: 2, title: 'Дети', name: 'child', value: 99 },
  { id: 3, title: 'Младенцы', name: 'baby', value: 1 },
];

const valueSum = dataPeople.reduce((sum, cur) => sum + cur.value, 0);

interface IDropdown {
  id: number;
  title: string;
  name: string;
  value: number;
}

interface IOpened {
  isOpened?: boolean;
}

const Dropdown = ({ isOpened }: IOpened) => {
  const [dataDropdown, setDataDropdown] = useState(dataPeople);
  const [opened, setOpened] = useState(isOpened || false);
  let [placeholderValue, setPlaceholderValue] = useState(valueSum);

  const onCountChange = (count: number) => {
    setPlaceholderValue((placeholderValue) => (placeholderValue += count));
  };

  const placeholderEnding = () => {
    let ending = ' ';
    if (placeholderValue % 10 === 1) {
      ending += pluralArray[0];
    } else if (placeholderValue % 10 > 1 && placeholderValue % 10 < 5) {
      ending += pluralArray[1];
    } else {
      ending += pluralArray[2];
    }
    return ending;
  };

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
            placeholderValue === 0
              ? 'Сколько гостей'
              : placeholderValue.toString() + placeholderEnding()
          }
          name="dropdown"
        />

        <span className={classesDropdownIcon}>
          {opened ? 'expand_more' : 'expand_less'}
        </span>
      </div>

      <div className={classesDropdownDrop}>
        {dataDropdown.map((item: IDropdown) => {
          return (
            <Counter
              key={item.id}
              id={item.id}
              title={item.title}
              value={item.value}
              onCountChange={onCountChange}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
