import React, { forwardRef, useState } from 'react';
import styles from './TextFieldMask.module.scss';
import InputMask from 'react-input-mask';
import classNames from 'classnames';

interface ITextFieldMask {
  mask: string;
  placeholder: string;
  name: string;
  focused? :boolean
}

const TextFieldMask = (props: ITextFieldMask) => {
  const classesTextField = classNames(
    styles['text-field__input'],
    props.focused && styles['text-field__input--focused']
  );
  return (
    <div className={styles['text-field']}>
      <InputMask
        className={classesTextField}
        {...props}
      />
    </div>
  )
}

export default TextFieldMask