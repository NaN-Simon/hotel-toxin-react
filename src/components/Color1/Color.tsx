import React from 'react';
import styles from './Color.module.scss';

interface IColorProps {
  id: number;
  color: string;
  title: string;
  hexName: string;
}

const Color = ({ id, color, title, hexName }: IColorProps) => {
  return (
    <div className={styles['color__item']}>
      <div
        style={{ backgroundColor: color }}
        className={styles['color__box']}
      ></div>

      <div className={styles['color__info']}>
        <h2 className={styles['color__title']}>{title}</h2>
        <p className={styles['color__hexName']}>{hexName}</p>
      </div>
    </div>
  );
};

export default Color;
