import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import Checkbox from '../Checkbox/Checkbox';
import styles from './CheckboxList.module.scss';

const dataAllowList = [
  { id: 1, title: 'Можно курить', name: 'smoke-allow' },
  { id: 2, title: 'Можно с питомцами', name: 'pets-allow' },
  {
    id: 3,
    title: 'Можно пригласить гостей (до 10 человек)',
    name: 'guests-allow',
    checked: true,
  },
];

const dataExtraComfortList = [
  { id: 4, title: 'Завтрак', name: 'breakfast' },
  { id: 5, title: 'Письменный стол', name: 'desk' },
  {
    id: 6, title: 'Стул для кормления', name: 'child-chair', checked: true,
  },
  {
    id: 7, title: 'Кроватка', name: 'child-bed', checked: false,
  },
  {
    id: 8, title: 'Телевизор', name: 'tv', checked: true,
  },
  {
    id: 9, title: 'Шампунь', name: 'shampoo', checked: true,
  },
];

const dataNeededsList = [
  {
    id: 10,
    title: 'Широкий коридор',
    description: 'Ширина коридоров в номере не менее 91 см.',
    name: 'corridorWidth',
  },
  {
    id: 11,
    title: 'Помощник для инвалидов',
    description: 'На 1 этаже вас встретит специалист и проводит до номера.',
    name: 'escort',
  },
];

interface ICheckboxList {
  preset?: string;
  dropWrapper?: boolean;
  isOpened?: boolean;
}

interface IDataCheckboxList {
  id: number;
  title: string;
  description?: string;
  name: string;
  checked?: boolean;
}

function CheckboxList({
  preset,
  dropWrapper,
  isOpened = true,
}: ICheckboxList) {
  let dataPreset = [];
  switch (preset) {
    case 'allowList':
      dataPreset = dataAllowList;
      break;
    case 'extraComfort':
      dataPreset = dataExtraComfortList;
      break;
    case 'neededs':
      dataPreset = dataNeededsList;
      break;
    default:
      dataPreset = dataAllowList;
  }
  const [checkboxList, setCheckboxList] = useState<IDataCheckboxList[]>(dataPreset);
  const [opened, setOpened] = useState(isOpened);

  const classesCheckbox = classNames(
    styles['checkbox-list__form'],
    opened && styles['checkbox-list__form--open'],
  );
  const classesCheckboxBtn = classNames(
    'material-icons',
    styles['checkbox-list__btn'],
  );

  const onChange = useCallback((id: number, checked: boolean) => {
    setCheckboxList((old) => old.map((o) => (o.id === id ? { ...o, checked } : o)));
  }, []);

  return (
    <div className={styles['checkbox-list']}>
      {dropWrapper && (
        <div
          className={styles['checkbox-list__wrapper']}
          role="presentation" //todo
          onClick={() => setOpened(!opened)}
          onKeyDown={() => setOpened(!opened)} //todo
        >
          <span className={classesCheckboxBtn}>expand_more</span>
        </div>
      )}
      <div className={classesCheckbox}>
        {checkboxList.map((item) => (
          <Checkbox
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            name={item.name}
            checked={item.checked || false}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckboxList;

CheckboxList.defaultProps = {
  preset: null,
  dropWrapper: null,
  isOpened: null,
};
