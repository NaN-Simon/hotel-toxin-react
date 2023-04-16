import React from 'react';
import classNames from 'classnames';
import classes from './Types.module.scss';

type ITypes = {
  id: string;
  type: string;
  tag: string;
  description: string;
};

type ITypeArray = {
  typeProps: ITypes[];
};

function Types({ typeProps }: ITypeArray) {
  return (
    <ul className={classes.type}>
      {typeProps.map((colorElement: ITypes) => (
        <li className={classes.type__item} key={colorElement.id}>
          <div
            className={classNames(
              classes.type__tag,
              classes[`type__${colorElement.type}`],
            )}
          >
            {colorElement.tag}
          </div>
          <div
            className={classNames(
              classes.type__description,
              classes[`type__${colorElement.type}`],
            )}
          >
            {colorElement.description}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Types;
