import React from 'react';
import classes from './Color.module.scss';

interface IColorProps {
  color: {
    id: number;
    color: string;
    title: string;
    hexName: string;
  };
}

const Color = ({ color }: IColorProps) => {
  // console.log(color);

  return (
    <div className={classes['color__item']}>
      <div
        style={{ backgroundColor: color.color }}
        className={classes['color__box']}
      ></div>

      <div className={classes['color__info']}>
        <h2 className={classes['color__title']}>{color.title}</h2>
        <p className={classes['color__hexName']}>{color.hexName}</p>
      </div>
    </div>
  );
};

export default Color;
