import React, { forwardRef, useState, LegacyRef } from 'react';
import styles from './TextFieldMask.module.scss';
import InputMask, { ReactInputMask } from 'react-input-mask';
import classNames from 'classnames';

interface ITextFieldMask {
  mask: string;
  placeholder?: string;
  name: string;
  customclassname?: string;
  customclassnamewrapper?: string;
  focused?: boolean;
}

const TextFieldMask = forwardRef(
  (props: ITextFieldMask, ref: LegacyRef<ReactInputMask> | undefined) => {
    
    const classesTextField = classNames(
      styles['text-field__input'],
      props.focused && styles['text-field__input--focused']
    );

    return (
      <div className={styles['text-field__wrapper']}>
        <InputMask ref={ref} className={classesTextField} {...props} />
      </div>
    );
  }
);

TextFieldMask.displayName = 'TextFieldMask';

export default TextFieldMask;
