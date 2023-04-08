import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './RadioButton.module.scss';

const dataRadioButton = {
  name: 'gender',
  inline: true,
  listItems: [
    { value: 'Мужчина', id: 'gender-f', checked: true },
    { value: 'Женщина', id: 'gender-m' },
  ],
};

type IlistItems = {
  value: string;
  id: string;
  checked?: boolean;
};

type IRadioButton = {
  name: string;
  inline: boolean;
  listItems: IlistItems[];
};

const RadioButton = () => {
  const [dataCheckboxButton, setDataCheckboxButton] =
    useState<IRadioButton>(dataRadioButton);
  const [radioChecked, setRadioChecked] = useState('Мужчина');

  const classesRadioButton = classNames(
    styles['checkbox-radio'],
    dataCheckboxButton.inline && styles['checkbox-radio-inline']
  );

  const updateState = () => {
    setDataCheckboxButton({
      name: dataCheckboxButton.name,
      inline: dataCheckboxButton.inline,
      listItems: dataCheckboxButton.listItems.map((listItem: IlistItems) => {
        listItem.checked = listItem.value === radioChecked;
        return listItem;
      }),
    });
  };

  const onCheckboxChange = (e: React.FormEvent<HTMLInputElement>) => {
    setRadioChecked((e.target as HTMLInputElement).value);
    updateState();
  };

  return (
    <div className={classesRadioButton}>
      {dataCheckboxButton.listItems.map((checkboxItem) => {
        return (
          <div key={checkboxItem.id} className={styles['checkbox-radio']}>
            <input
              className={styles['custom-checkbox-radio']}
              type="radio"
              name={dataCheckboxButton.name}
              value={checkboxItem.value}
              id={checkboxItem.id}
              checked={radioChecked === checkboxItem.value}
              onChange={onCheckboxChange}
            />
            <label htmlFor={checkboxItem.id}>{checkboxItem.value}</label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioButton;
