import React from 'react';
import styles from './CheckboxList.module.scss';
import Checkbox from '../Checkbox/Checkbox';

interface IChecked {
  id: number;
  title: string;
  name: string;
  checked: boolean;
}

interface ICheckedArr {
  checkboxProps: IChecked[];
  onChange: (id: number, checked: boolean) => void;
}

const CheckboxList = ({ checkboxProps, onChange }: ICheckedArr) => {
  return (
    <div>
      <form className = {styles['checkboxList__form']}>
        {checkboxProps.map((item) => {
          return (
            <Checkbox
              key={item.id}
              id={item.id}
              title={item.title}
              name={item.name}
              checked={item.checked}
              onChange={onChange}/>
          );
        })}
      </form>
    </div>
  );
};

export default CheckboxList;
