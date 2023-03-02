import React from 'react';
import styles from './TextField.module.scss';

interface ITextField {
  type: string;
  placeholder: string;
  name: string;
  focused?: boolean;
}


export default function TextField({ type, placeholder, name, focused}: ITextField) {

  const focusedClass = [styles['text-field__input']]
  focused && focusedClass.push(styles['text-field__input--focused'])

  return (
    <div className={styles['text-field']}>
      <input
        className={focusedClass.join(' ')}
        data-type="input"
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
}