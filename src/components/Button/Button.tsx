import classNames from 'classnames';
import React from 'react';
import styles from './Button.module.scss';

interface IButton {
  title: string;
  type: string;
  arrow?: boolean;
  disable?: boolean;
}
const Button = ({ title, type, arrow, disable }: IButton) => {
  const classesButton = classNames(
    styles['button'],
    type === 'colored' && styles['button__colored'],
    type === 'tranparent' && styles['button__colored__transparent'],
    type === 'link' && styles['button__link'],
    arrow && 'material-icons',
    disable && styles['button--disable']
  );
  const classesArrow = classNames('material-icons', styles['button__arrow']);

  function hasArrow() {
    return <span className={classesArrow}>arrow_forward</span>;
  }

  return (
    <button style={arrow
    ? {justifyContent:'space-between'}
    : {justifyContent:'center'}}
    className={classesButton}>
      {arrow && <span></span>}
      {title}
      {arrow && hasArrow()}
    </button>
  );
};

export default Button;
