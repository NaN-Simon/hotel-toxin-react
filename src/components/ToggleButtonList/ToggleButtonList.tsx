import React, {useState, useCallback} from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';
import styles from './ToggleButtonList.module.scss';

const dataToggleButtonList = [
  { id: 1, title: "Получать спецпредложения", name: 'special-offer1'},
  { id: 2, title: "Получать спецпредложения", name: 'special-offer2', checked: true },
]

interface IlistItems {
  id: number;
  title: string;
  name: string;
  checked?: boolean;
}

const ToggleButtonList = () => {
  const [dataCheckboxList, setDataCheckboxList] = useState<IlistItems[]>(dataToggleButtonList);

  const onChange = useCallback((id: number, checked: boolean) => {
    setDataCheckboxList((old) => old.map((o) => (o.id === id ? { ...o, checked } : o)));
  }, []);

  return (
    <div>
      <form className = {styles['checkboxList__form']}>
        {dataCheckboxList.map((item) => {
          return (
            <ToggleButton
              key={item.id}
              id={item.id}
              title={item.title}
              name={item.name}
              checked={item.checked || false}
              onChange={onChange}
            />
          )
        })}
      </form>
    </div>

  )
}

export default ToggleButtonList