import React from 'react';
import classNames from 'classnames';
import styles from './TextField.module.scss';

type ITextField = {
  placeholder: string;
  name: string;
  arrow?: boolean;
  focused?: boolean;
};

function TextField({
  placeholder, name, arrow, focused,
}: ITextField) {
  const classesArrow = classNames(
    'material-icons',
    styles['text-field__arrow'],
  );
  const classesTextField = classNames(
    styles['text-field__input'],
    focused && styles['text-field__input--focused'],
    arrow && styles['text-field__input--arrow'],
  );

  function hasArrow() {
    return <span className={classesArrow}>arrow_forward</span>;
  }

  return (
    <div className={styles['text-field']}>
      {arrow && <span />}
      <input
        className={classesTextField}
        type="text"
        placeholder={placeholder}
        name={name}
      />
      {arrow && hasArrow()}
    </div>
  );
}

export default TextField;

TextField.defaultProps = {
  arrow: null,
  focused: null,
};
