import React from 'react';
import classNames from 'classnames';
import styles from './RateButton.module.scss';

type IRateButton = {
  id: number;
  maxrate: number;
  rate: number;
};

const classesRateButton = classNames(
  'material-icons',
  styles['rate-button__item'],
);

function stars(maxrate: number, rate: number) {
  const elemArr = [];
  for (let i = 1; i <= maxrate; i++) {
    i <= rate ? elemArr.push('star') : elemArr.push('star_border');
  }
  return elemArr;
}

function RateButton({ maxrate, rate, id }: IRateButton) {
  return (
    <div>
      {stars(maxrate, rate).map((el, index) => (
        <li
          className={classesRateButton}
          id={id.toString() + index}
          key={id.toString() + index}
        >
          {el}
        </li>
      ))}
    </div>
  );
}

export default RateButton;
