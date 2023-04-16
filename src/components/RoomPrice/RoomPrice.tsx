import React from 'react';
import styles from './RoomPrice.module.scss';

type IRoomPrice = {
  price: string;
  currency: string;
  text: string
}

function RoomPrice({ price, currency, text }: IRoomPrice) {
  return (
    <div className={styles['room-price']}>
      <div className={styles['room-price__price']}>{price}</div>
      <div className={styles['room-price__currency']}>{currency}</div>
      <div className={styles['room-price__space']}>&nbsp;</div>
      <div className={styles['room-price__text']}>{text}</div>
    </div>
  );
}

export default RoomPrice;
