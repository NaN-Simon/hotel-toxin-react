import React from 'react';
import Color from '../color/Color';
import classes from './Colors.module.scss';

interface IColorProps {
  id: number;
  color: string;
  title: string;
  hexName: string;
}
interface IColor {
  colorProps: IColorProps[];
}

const Colors = (props: IColor) => {
  return (
    <div className={classes['colors']}>
      {props.colorProps.map((colorElement: IColorProps) => {
        return <Color color={colorElement} key={colorElement.id} />;
      })}
    </div>
  );
};

export default Colors;
