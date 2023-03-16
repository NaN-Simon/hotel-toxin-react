import React, {useState, useCallback} from 'react';
import styles from './CheckboxList.module.scss';
import Checkbox from '../Checkbox/Checkbox';

const dataCheckboxList = [
  { id: 1, title: "Можно курить", name: 'smoke-allow'},
  { id: 2, title: "Можно с питомцами", name: 'pets-allow'},
  { id: 3, title: "Можно пригласить гостей (до 10 человек)", name: 'guests-allow', checked: true }
]

interface IChecked {
  id: number;
  title: string;
  name: string;
  checked?: boolean;
}

interface ICheckedArr {
  checkboxProps: IChecked[];
  onChange: (id: number, checked: boolean) => void;
}

const CheckboxList = () => {
  const [checkboxList, setCheckboxList] = useState<IChecked[]>(dataCheckboxList);
  
  const onChange = useCallback((id: number, checked: boolean) => {
    setCheckboxList((old) => old.map((o) => (o.id === id ? { ...o, checked } : o)));
  }, []);

  return (
    <div>
      <form className = {styles['checkboxList__form']}>
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

export default CheckboxList;
