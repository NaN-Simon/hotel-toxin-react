import React from 'react';
import styles from './Checkbox.module.scss';
import classNames from 'classnames';

interface ICheckbox {
  id: number;
  title: string;
  name: string;
  checked: boolean;
  onChange: (id: number, checked: boolean) => void;
}

const Checkbox = ({id, title,name,checked, onChange}: ICheckbox) => {
  return (
    <label className={styles['checkbox__label']}>
      <input
        className={styles['checkbox__reset-icon']}
        id={id.toString()}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={(e) => onChange(id, e.currentTarget.checked)}
        value='face'
      />

      <span className={classNames('material-icons', styles['checkbox__box'])}></span>
      <span className={styles['checkbox__span']}>{title}</span>
    </label>
  )
}

export default Checkbox