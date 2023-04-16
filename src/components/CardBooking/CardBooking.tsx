import React from 'react';
import Basket from '../Basket/Basket';
import Button from '../Button/Button';
import DatePickerCustom from '../DatePicker/DatePicker';
import Dropdown from '../Dropdown/Dropdown';
import Heading from '../Heading/Heading';
import RoomNumber from '../RoomNumber/RoomNumber';
import RoomPrice from '../RoomPrice/RoomPrice';
import styles from './CardBooking.module.scss';

function CardBooking() {
  return (
    <form name="card-booking1" className={styles['card-room-booking']}>
      <div className={styles['card-room-booking__number-price']}>
        <RoomNumber symbol="№" number={888} type="ЛЮКС" />
        <RoomPrice price="9900" currency="₽" text="в сутки" />
      </div>
      <div className={styles['card-room-booking__date-picker']}>
        <div className={styles['card-room-booking__date-picker-arrive']}>
          <Heading type="h3" title="ПРИБЫТИЕ" />
          <DatePickerCustom name="datePicker3" mask="99.99.9999" />
        </div>
        <div className={styles['card-room-booking__date-picker-departure']}>
          <Heading type="h3" title="ВЫЕЗД" />
          <DatePickerCustom name="datePicker4" mask="99.99.9999" />
        </div>
      </div>
      <div className={styles['card-room-booking__dropdown']}>
        <Heading type="h3" title="гости" />
        <Dropdown preset="guests" hasBtn />
      </div>
      <div className={styles['card-room-booking__basket']}>
        <Basket day={4} currency="₽" discount={2179} extraServiceCost={300} />
      </div>
      <div className={styles['card-room-booking__button']}>
        <Button type="colored" arrow>
          забронировать
        </Button>
      </div>
    </form>
  );
}

export default CardBooking;
