import React from 'react';
import Color from '../color/Color';
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

const Colors = ({colorProps}: IColor) => {
  return (
    <div className={styles['colors']}>
      {colorProps.map((colorElement: IColorProps) => {
        return <Color color={colorElement} key={colorElement.id} />;
      })}
    </div>
  );
};

export default Colors;
