import React from 'react';
import classNames from 'classnames';
import CardSearch from '../../components/CardSearch/CardSearch';
import styles from './Cards.module.scss';
import CardRegister from '../../components/CardRegister/CardRegister';

const Cards = () => {
  return (
    <div>
      <header className={styles['cards__header']}>
        Cards
      </header>
      <main  className={styles['cards__main']}>
        <div className={styles['cards__container']}>
          <div className={styles['cards__search-and-register']}>
            <CardSearch/>
            <CardRegister/>
          </div>
          <div className={styles['cards__booking-and-login']}></div>
          <div className={styles['cards__calendar-and-rooms']}></div>
        </div>
      </main>
    </div>
  )
}

export default Cards