import React, { FC, useState, useCallback } from 'react';
import styles from './CheckboxList.module.scss';
import Checkbox from '../Checkbox/Checkbox';
import classNames from 'classnames';

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
  { id: 6, title: 'Стул для кормления', name: 'child-chair', checked: true },
  { id: 7, title: 'Кроватка', name: 'child-bed', checked: false },
  { id: 8, title: 'Телевизор', name: 'tv', checked: true },
  { id: 9, title: 'Шампунь', name: 'shampoo', checked: true },
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
  isRichType?: boolean;
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

const CheckboxList: FC<ICheckboxList> = ({
  preset,
  isRichType,
  dropWrapper,
  isOpened = true,
}) => {
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
  const [checkboxList, setCheckboxList] =
    useState<IDataCheckboxList[]>(dataPreset);
  const [opened, setOpened] = useState(isOpened);

  const classesCheckboxForm = classNames(
    styles['checkboxList__form'],
    opened && styles['checkboxList__form--open']
  );
  const classesCheckboxBtn = classNames(
    'material-icons',
    styles['checkboxList__btn']
  );

  const onChange = useCallback((id: number, checked: boolean) => {
    setCheckboxList((old) =>
      old.map((o) => (o.id === id ? { ...o, checked } : o))
    );
  }, []);

  return (
    <div className={styles['checkboxList']}>
      {dropWrapper && (
        <div
          className={styles['checkboxList__wrapper']}
          onClick={() => setOpened(!opened)}
        >
          <span className={classesCheckboxBtn}>expand_more</span>
        </div>
      )}
      <form className={classesCheckboxForm}>
        {checkboxList.map((item) => {
          return (
            <Checkbox
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              name={item.name}
              checked={item.checked || false}
              onChange={onChange}
            />
          );
        })}
      </form>
    </div>
  );
};

export default CheckboxList;
