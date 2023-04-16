import React from 'react';
import styles from './RoomNumber.module.scss';

type IRoomNumber = {
  symbol: string;
  number: number;
  type: string
}
function RoomNumber({ symbol, number, type }: IRoomNumber) {
  return (
    <div className={styles['room-number']}>
      <div className={styles['room-number__symbol']}>{symbol}</div>
      <div className={styles['room-number__number']}>{number}</div>
      <div className={styles['room-number__type']}>{type}</div>
    </div>
  );
}

export default RoomNumber;
