import React from 'react'
import styles from './TextFieldMask.module.scss';
import InputMask from 'react-input-mask';
import classNames from 'classnames';

interface ITextFieldMask {
  mask: string;
  placeholder: string;
  name: string;
  focused? :boolean
}

export default function TextFieldMask ({
  mask,
  placeholder,
  name,
  focused
}: ITextFieldMask) {
  const classesTextField = classNames(
    styles['text-field__input'],
    focused && styles['text-field__input--focused']
  );
  return (
    <div className={styles['text-field']}>
      <InputMask
        className={classesTextField}
        mask={mask}
        placeholder={placeholder}
        name={name}
      />
    </div>
  )
}