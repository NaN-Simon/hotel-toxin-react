import React from 'react';
import classes from './Types.module.scss';
import classNames from 'classnames';

interface ITypesProps {
  id: string;
  type: string;
  tag: string;
  description: string;
}

interface IType {
  typeProps: ITypesProps[];
}

const Types = ({ typeProps }: IType) => {
  return (
    <ul className={classes['type']}>
      {typeProps.map((colorElement: ITypesProps) => {
        return (
          <li className={classes['type__item']} key={colorElement.id}>
            <div
              className={classNames(
                classes['type__tag'],
                classes[`type__${colorElement.type}`]
              )}
            >
              {colorElement.tag}
            </div>
            <div
              className={classNames(
                classes['type__description'],
                classes[`type__${colorElement.type}`]
              )}
            >
              {colorElement.description}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Types;
