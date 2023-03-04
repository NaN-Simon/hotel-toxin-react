import React from 'react';
import styles from './TextField.module.scss';
import classNames from 'classnames';

interface ITextField {
  type: string;
  placeholder: string;
  name: string;
  focused?: boolean;
}

export default function TextField({
  type,
  placeholder,
  name,
  focused,
}: ITextField) {
  const classesTextField = classNames(
    styles['text-field__input'],
    focused && styles['text-field__input--focused']
  );

  return (
    <div className={styles['text-field']}>
      <input
        className={classesTextField}
        data-type="input"
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
}
