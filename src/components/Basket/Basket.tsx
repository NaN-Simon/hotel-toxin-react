import React from 'react';
import styles from './Basket.module.scss';

const costDay = 9990;

type IBasket = {
  day: number;
  currency: string;
  discount: number;
  extraServiceCost: number;
};

const getPluralDay = (number: number, words: string[]) => {
  const value = Math.abs(number) % 100;
  const num = value % 10;
  if (value > 10 && value < 20) return `${value} ${words[2]}`;
  if (num > 1 && num < 5) return `${value} ${words[1]}`;
  if (num === 1) return `${value} ${words[0]}`;
  return `${number} ${words[2]}`;
};

function Basket({
  day, currency, discount = 0, extraServiceCost,
}: IBasket) {
  return (
    <div className={styles['basket']}>
      <ul className={styles['basket__list']}>
        <li className={styles['basket__list-days']}>
          <span className={styles['basket__list-days-calc']}>
            {costDay}
            {currency}
            {' '}
            X
            {getPluralDay(day, ['сутки', 'суток', 'суток'])}
          </span>
          <span className={styles['basket__list-days-result']}>
            {costDay * day}
            {currency}
          </span>
        </li>
        {discount && (
          <li className={styles['basket__list-discount']}>
            <span className={styles['basket__list-discount-calc']}>
              <span className={styles['basket__list-discount-calc-text']}>
                Сбор за услуги: скидка
                {' '}
                {discount}
                {currency}
              </span>
              <span className={styles['basket__list-discount-calc-extra-info']}>
                i
              </span>
            </span>
            <span className={styles['basket__list-discount-result']}>
              -
              {discount}
              {currency}
            </span>
          </li>
        )}
        <li className={styles['basket__list-extra-service']}>
          <span className={styles['basket__list-extra-service-title']}>
            <span className={styles['basket__list-extra-service-title-text']}>
              Сбор за дополнительные услуги
            </span>
            <span
              className={styles['basket__list-extra-service-title-extra-info']}
            >
              i
            </span>
          </span>
          <span className={styles['basket__list-extra-service-cost']}>
            {extraServiceCost}
            {currency}
          </span>
        </li>
      </ul>

      <div className={styles['basket__result']}>
        <span className={styles['basket__result-title']}>Итого</span>
        <span className={styles['basket__result-result']}>
          {costDay * day - discount + extraServiceCost}
          {currency}
        </span>
      </div>
    </div>
  );
}

export default Basket;
