import React, {useState} from 'react';
import styles from './Counter.module.scss';

interface ICounter{
  id: number;
  title: string;
  value: number;
  onCountChange: (count:number) => void;
}

const Counter = ({id, title, value, onCountChange}: ICounter) => {

  const MIN = 0;
  const MAX = 99;

  (function valueValidation(){
      value < MIN ? value = MIN : value
      value > MAX ? value = MAX : value
    })()

  const [count, setCount] = useState(value);

  function increment() {
    if(count < MAX)
    {onCountChange(1)
      setCount(count + 1)
    }
  }
  function decrement() {
    if(count > MIN){
      onCountChange(-1)
      setCount(count - 1)
    }

  }
  return (
    <div id={id.toString()} className={styles['counter']}>
      <p className={styles['counter__title']}>{title}</p>
      <div className={styles['counter__calculate']}>
        <button
          className={`${styles['counter__btn']} ${count === MIN && styles['counter__btn--disabled']}`}
          onClick={decrement}>
          -
        </button>
        <h6 className={styles['counter__count']} >{count}</h6>
        <button
          className={`${styles['counter__btn']} ${count === MAX && styles['counter__btn--disabled']}`}
          onClick={increment}>
          +
        </button>
      </div>
    </div>
  )
}

export default Counter;