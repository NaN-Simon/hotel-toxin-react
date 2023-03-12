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

const TextFieldMask = forwardRef((props: ITextFieldMask, ref: any) =>{
  const classesTextField = classNames(
    styles['text-field__input'],
    props.focused && styles['text-field__input--focused']
  );
  return (
    <div className={styles['text-field']}>
      <InputMask
        ref={ref}
        className={classesTextField}
        {...props}
      />
    </div>
  )
})
// const TextFieldMask = (props: ITextFieldMask) => {
//   const classesTextField = classNames(
//     styles['text-field__input'],
//     props.focused && styles['text-field__input--focused']
//   );
//   return (
//     <div className={styles['text-field']}>
//       <InputMask
//         className={classesTextField}
//         {...props}
//       />
//     </div>
//   )
// }
TextFieldMask.displayName = 'TextFieldMask'
export default TextFieldMask