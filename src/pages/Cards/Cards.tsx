import React from 'react';
import classNames from 'classnames';
import CardSearch from '../../components/CardSearch/CardSearch';
import CardRegister from '../../components/CardRegister/CardRegister';
import styles from './Cards.module.scss';
import CardBooking from '../../components/CardBooking/CardBooking';

const Cards = () => {
  return (
    <div>
      <header className={styles['cards__header']}>Cards</header>
      <main className={styles['cards__main']}>
        <div className={styles['cards__container']}>
          <div className={styles['cards__search-and-register']}>
            <CardSearch />
            <CardRegister />
          </div>
          <div className={styles['cards__booking-and-login']}>
            <CardBooking />
          </div>
          <div className={styles['cards__calendar-and-rooms']}></div>
        </div>
      </main>
    </div>
  );
};

export default Cards;
