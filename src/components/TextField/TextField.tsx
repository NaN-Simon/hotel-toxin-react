import React from 'react';
import styles from './TextField.module.scss';
import classNames from 'classnames';

interface ITextField {
  placeholder: string;
  name: string;
  arrow?: boolean;
  focused?: boolean;
}

const classesArrow = classNames('material-icons', styles['text-field__arrow']);

export default function TextField({
  placeholder,
  name,
  arrow,
  focused,
}: ITextField) {
  const classesTextField = classNames(
    styles['text-field__input'],
    focused && styles['text-field__input--focused'],
    arrow && styles['text-field__input--arrow']
  );

  function hasArrow() {
    return <span className={classesArrow}>arrow_forward</span>;
  }

  return (
    <div className={styles['text-field']}>
      {arrow && <span></span>}
      <input
        className={classesTextField}
        type='text'
        placeholder={placeholder}
        name={name}
      />
      {arrow && hasArrow()}
    </div>
  );
}
