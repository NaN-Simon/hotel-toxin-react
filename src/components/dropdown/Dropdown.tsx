import React, { useState } from 'react';
import Counter from '../counter/Counter';
import styles from './Dropdown.module.scss';

const dataPeople = [
  { id: 1, title: "Взрослые", name: 'adult', value: 0 },
  { id: 2, title: "Дети", name: 'child', value: 0 },
  { id: 3, title: "Младенцы", name: 'baby', value: 1 }
]

interface IDropdown {
  id: number;
  title: string;
  name: string;
  value: number;
}

const Dropdown = (props: { isOpened: boolean}) => {
  console.log('activate');

  const [dataDropdown, setDataDropdown] = useState(dataPeople);

  const [opened, setOpened] = useState(props.isOpened);
  const icon = opened ? 'expand_more' : 'expand_less'

  let valueSum = dataPeople.reduce((sum,cur) => sum + cur.value,0);
  let [placeholderValue, setPlaceholderValue] = useState(valueSum)

  const onCountChange = ((count:number) => {
    setPlaceholderValue(placeholderValue += count)
  });

  const placeholderEnding = () => {
    let ending = ''
    if (placeholderValue === 1) {
      ending = ' гость';
    } else if (placeholderValue > 1 && placeholderValue < 5) {
      ending = ' гостя';
    } else {
      ending = ' гостей';
    }
    return ending
  }

  return (
    <div className={`${styles['dropdown']} ${opened && styles['dropdown--open-title']}`}>
      <div className={styles['dropdown__title']} onClick={()=> setOpened(!opened)}>
        <input
          className={styles['dropdown__input']}
          readOnly
          type="text"
          placeholder={placeholderValue === 0 ? 'Сколько гостей' : (placeholderValue).toString() + placeholderEnding()}
          name="dropdown"
          disabled
        />
        <span className={`${styles['dropdown__icon']} material-icons`}>{icon}</span>
      </div>
      <div className={`${styles.dropdown__drop} ${opened && styles.dropdown__open}`}>
        {dataDropdown.map((item: IDropdown) => {
          return (
            <Counter key={item.id} id={item.id} title={item.title} value={item.value} onCountChange={onCountChange} />
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;