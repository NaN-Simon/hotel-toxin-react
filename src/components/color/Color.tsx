import React from 'react';
import styles from './Color.module.scss';

interface IColorProps {
  color: {
    id: number;
    color: string;
    title: string;
    hexName: string;
  };
}

const Color = ({ color }: IColorProps) => {
  return (
    <div className={styles['color__item']}>
      <div
        style={{ backgroundColor: color.color }}
        className={styles['color__box']}
      ></div>

      <div className={styles['color__info']}>
        <h2 className={styles['color__title']}>{color.title}</h2>
        <p className={styles['color__hexName']}>{color.hexName}</p>
      </div>
    </div>
  );
};

export default Color;
