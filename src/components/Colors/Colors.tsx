import React from 'react';
import Color from '../Color/Color';
import styles from './Colors.module.scss';

interface IColors {
  id: number;
  color: string;
  title: string;
  hexName: string;
}

interface IColorArray {
  colorProps: IColors[];
}

function Colors({ colorProps }: IColorArray) {
  return (
    <div className={styles['colors']}>
      {colorProps.map((item) => (
        <Color
          key={item.id}
          id={item.id}
          color={item.color}
          title={item.title}
          hexName={item.hexName}
        />
      ))}
    </div>
  );
}

export default Colors;
