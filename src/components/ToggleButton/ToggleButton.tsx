import React from 'react';
import styles from './ToggleButton.module.scss';

type IToggleButton = {
  id: number;
  title: string;
  name: string;
  checked?: boolean;
  onChange: (id: number, checked: boolean) => void;
};

const ToggleButton = ({
  id,
  title,
  name,
  checked,
  onChange,
}: IToggleButton) => {
  return (
    <label className={styles['toggle']}>
      <input
        className={styles['toggle__input']}
        id={id.toString()}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={(e) => onChange(id, e.currentTarget.checked)}
      />

      <span className={styles['toggle__input-title']}>{title}</span>
    </label>
  );
};

export default ToggleButton;
