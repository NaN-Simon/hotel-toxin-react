import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface IButton {
  type: string;
  arrow?: boolean;
  disable?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}
const Button = ({ type, arrow, disable, onClick, children }: IButton) => {
  const classesButton = classNames(
    arrow && 'material-icons',
    styles['button'],
    type === 'colored' && styles['button__colored'],
    type === 'tranparent' && styles['button__colored__transparent'],
    type === 'link' && styles['button__link'],
    disable && styles['button--disable']
  );
  const classesArrow = classNames('material-icons', styles['button__arrow']);

  function hasArrow() {
    return <span className={classesArrow}>arrow_forward</span>;
  }

  return (
    <button
      className={classesButton}
      style={
        arrow
          ? { justifyContent: 'space-between' }
          : { justifyContent: 'center' }
      }
      onClick={onClick}
    >
      {arrow && <span></span>}
      {children}
      {arrow && hasArrow()}
    </button>
  );
};

export default Button;
