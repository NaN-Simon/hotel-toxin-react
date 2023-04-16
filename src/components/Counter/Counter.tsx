import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './Counter.module.scss';

type ICounter = {
  id: number;
  title: string;
  value: number;
  onChange: (id: number, count: number) => void;
}

const MIN = 0;
const MAX = 99;

function Counter({
  id, title, value, onChange,
}: ICounter) {
  const [count, setCount] = useState(value);

  function increment() {
    if (count < MAX) {
      setCount((count) => count + 1);
    }
  }

  function decrement() {
    if (count > MIN) {
      setCount((count) => count - 1);
    }
  }

  function reset() {
    setCount(value);
  }

  useEffect(() => onChange(id, count), [count]);
  useEffect(() => reset(), [value]);

  const classesDecrement = classNames(
    styles['counter__btn'],
    count === MIN && styles['counter__btn--disabled'],
  );
  const classesIncrement = classNames(
    styles['counter__btn'],
    count === MAX && styles['counter__btn--disabled'],
  );

  return (
    <div id={id.toString()} className={styles['counter']}>
      <p className={styles['counter__title']}>{title}</p>
      <div className={styles['counter__calculate']}>
        <button
          type="submit"
          className={classesDecrement}
          onClick={decrement}
        >
          -
        </button>
        <h6 className={styles['counter__count']}>{count}</h6>
        <button
          type="submit"
          className={classesIncrement}
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
