import React from 'react';
import Color from '../Color/Color';
import styles from './Colors.module.scss';

interface IColorProps {
  id: number;
  color: string;
  title: string;
  hexName: string;
}

interface IColor {
  colorProps: IColorProps[];
}

const Colors = ({ colorProps }: IColor) => {
  return (
    <div className={styles['colors']}>
      {colorProps.map((item) => {
        return (
          <Color
            key={item.id}
            id={item.id}
            color={item.color}
            title={item.title}
            hexName={item.hexName}
          />
        );
      })}
    </div>
  );
};

export default Colors;
