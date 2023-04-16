import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './RadioButton.module.scss';

const defaultGenderPreset = [
  { value: 'Мужчина', id: 'gender-f', checked: true },
  { value: 'Женщина', id: 'gender-m' },
];
const extraGenderPreset = [
  { value: 'Мужчина', id: 'gender-f', checked: true },
  { value: 'Женщина', id: 'gender-m' },
  { value: 'Другое', id: 'gender-other' },
];

type IPresetList = {
  value: string;
  id: string;
  checked?: boolean;
};

type IRadioButton = {
  preset: string
  name: string
  inline: boolean
}

function RadioButton({ preset, name, inline }: IRadioButton) {
  const dataPreset: IPresetList[] = preset === 'gender' ? defaultGenderPreset : extraGenderPreset;
  const [radioChecked, setRadioChecked] = useState(dataPreset[0].value);

  const classesRadioButton = classNames(
    styles['checkbox-radio'],
    inline && styles['checkbox-radio--inline'],
  );

  const onCheckboxChange = (e: React.FormEvent<HTMLInputElement>) => {
    setRadioChecked((e.target as HTMLInputElement).value);
  };

  return (
    <div className={classesRadioButton}>
      {dataPreset.map((item) => (
        <div key={item.id} className={styles['checkbox-radio']}>
          <input
            className={styles['checkbox-radio__input']}
            type="radio"
            name={name}
            value={item.value}
            id={item.id}
            checked={radioChecked === item.value}
            onChange={onCheckboxChange}
          />
          <label htmlFor={item.id}>{item.value}</label>
        </div>
      ))}
    </div>
  );
}

export default RadioButton;
