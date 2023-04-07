import React, {FC, useState, useCallback} from 'react';
import styles from './CheckboxList.module.scss';
import Checkbox from '../Checkbox/Checkbox';
import classNames from 'classnames';

const dataCheckboxList = [
  { id: 1, title: "Можно курить", name: 'smoke-allow'},
  { id: 2, title: "Можно с питомцами", name: 'pets-allow'},
  { id: 3, title: "Можно пригласить гостей (до 10 человек)", name: 'guests-allow', checked: true }
]

const dataExtraComfort = [
  { id: 1, title: "Завтрак", name: 'breakfast'},
  { id: 2, title: "Письменный стол", name: 'desk'},
  { id: 3, title: "Стул для кормления", name: 'child-chair', checked: true },
  { id: 4, title: "Кроватка", name: 'child-bed', checked: false },
  { id: 5, title: "Телевизор", name: 'tv', checked: true },
  { id: 6, title: "Шампунь", name: 'shampoo', checked: true }
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

const CheckboxListRich:FC<ICheckboxList> = ({preset, dropWrapper, isOpened = true}) => {
  const dataPreset = preset === 'allowList' ? dataCheckboxList : dataExtraComfort;
  const [checkboxList, setCheckboxList] = useState<IDataCheckboxList[]>(dataPreset);
  const [opened, setOpened] = useState(isOpened);
  
  const classesCheckboxForm = classNames(
    styles['checkboxList__form'],
    opened && styles['checkboxList__form--open']
  );
  const classesCheckboxBtn = classNames(
    'material-icons',
    styles['checkboxList__btn'],
    
  );

  const onChange = useCallback((id: number, checked: boolean) => {
    setCheckboxList((old) => old.map((o) => (o.id === id ? { ...o, checked } : o)));
  }, []);

  return (
    <div className={styles['checkboxList']}>
      {dropWrapper && <div className={styles['checkboxList__wrapper']}
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