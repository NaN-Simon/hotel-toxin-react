import React, {useState, useCallback} from 'react';
import classNames from 'classnames';
import styles from './CheckboxList.module.scss';
import Checkbox from '../Checkbox/Checkbox';

const dataCheckboxList = [
  { id: 1, title: "Можно курить", name: 'smoke-allow'},
  { id: 2, title: "Можно с питомцами", name: 'pets-allow'},
  { id: 3, title: "Можно пригласить гостей (до 10 человек)", name: 'guests-allow', checked: true }
]

const dataExtraComfort = [
  { id: 4, title: "Завтрак", name: 'breakfast'},
  { id: 5, title: "Письменный стол", name: 'desk'},
  { id: 6, title: "Стул для кормления", name: 'child-chair', checked: true },
  { id: 7, title: "Кроватка", name: 'child-bed', checked: false },
  { id: 8, title: "Телевизор", name: 'tv', checked: true },
  { id: 9, title: "Шампунь", name: 'shampoo', checked: true }
]

interface ICheckboxList {
  preset: string
  dropWrapper?: boolean
  isOpened?: boolean
}

interface IDataCheckboxList {
  id: number;
  title: string;
  name: string;
  checked?: boolean;
}

const CheckboxListRich = ({preset, dropWrapper, isOpened = true}: ICheckboxList) => {
  const dataPreset = preset === 'allowList' ? dataCheckboxList : dataExtraComfort;
  const [checkboxList, setCheckboxList] = useState<IDataCheckboxList[]>(dataPreset);
  const [opened, setOpened] = useState(isOpened);

  const classesCheckboxForm = classNames(
    styles['checkbox-list__form'],
    opened && styles['checkbox-list__form--open']
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
      {dropWrapper && <div className={styles['checkbox-list__wrapper']}
        onClick={() => setOpened(!opened)}>
        <span className={classesCheckboxBtn}>expand_more</span>
      </div>
      }
      <form className = {classesCheckboxForm}>
        {checkboxList.map((item) => {
          return (
            <Checkbox
              key={item.id}
              id={item.id}
              title={item.title}
              name={item.name}
              checked={item.checked || false}
              onChange={onChange}/>
          );
        })}
      </form>
    </div>
  );
};

export default CheckboxListRich;
