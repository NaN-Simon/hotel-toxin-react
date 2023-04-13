import React from 'react';
import classNames from 'classnames';
import CardSearch from '../../components/CardSearch/CardSearch';
import CardRegister from '../../components/CardRegister/CardRegister';
import CardBooking from '../../components/CardBooking/CardBooking';
import CardLogin from '../../components/CardLogin/CardLogin';
import DatePickerCustom from '../../components/DatePicker/DatePicker';
import styles from './Cards.module.scss';
import CarouselResponsive from '../../components/CarouselResponsive/CarouselResponsive';

const Cards = () => {
  return (
    <div>
      <header className={styles['cards__header']}>Cards</header>
      <main className={styles['cards__main']}>
        <div className={styles['cards__container']}>
          <div className={styles['cards__search-and-register']}>
            <div className={styles['cards__search-and-register-search']}>
              <CardSearch />
            </div>
            <div className={styles['cards__search-and-register-register']}>
              <CardRegister />
            </div>
          </div>
          <div className={styles['cards__booking-and-login']}>
            <div className={styles['cards__booking-and-login-booking']}>
              <CardBooking />
            </div>
            <div className={styles['cards__booking-and-login-login']}>
              <CardLogin />
            </div>
          </div>
          <div className={styles['cards__calendar-and-rooms']}>
            <div className={styles['cards__calendar-and-rooms-calendar']}>
              <DatePickerCustom
                name="datePicker4"
                mask="99.99.9999 - 99.99.9999"
                selectsRange
                inline
              />
            </div>
            <div className={styles['cards__calendar-and-rooms-room1']}>
              <CarouselResponsive preset="rooms1" />
            </div>
            <div className={styles['cards__calendar-and-rooms-room2']}>
              <CarouselResponsive preset="rooms2" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cards;
