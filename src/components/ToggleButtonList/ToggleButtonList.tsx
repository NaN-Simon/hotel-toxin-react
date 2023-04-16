import React, { useState, useCallback } from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';
import styles from './ToggleButtonList.module.scss';

const dataToggleButtonList = [
  { id: 1, title: 'Получать спецпредложения', name: 'special-offer1' },
  {
    id: 2,
    title: 'Получать спецпредложения',
    name: 'special-offer2',
    checked: true,
  },
];

type IToggleButtonList = {
  id: number;
  title: string;
  name: string;
  checked?: boolean;
};

function ToggleButtonList() {
  const [dataCheckboxList, setDataCheckboxList] = useState<IToggleButtonList[]>(dataToggleButtonList);

  const onChange = useCallback((id: number, checked: boolean) => {
    setDataCheckboxList((old) => old.map((o) => (o.id === id ? { ...o, checked } : o)));
  }, []);

  return (
    <div>
      <div className={styles['checkbox-list__form']}>
        {dataCheckboxList.map((item) => (
          <ToggleButton
            key={item.id}
            id={item.id}
            title={item.title}
            name={item.name}
            checked={item.checked || false}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
}

export default ToggleButtonList;
