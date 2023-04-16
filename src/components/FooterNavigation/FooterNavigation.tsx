import React from 'react';
import styles from './FooterNavigation.module.scss';

const dataNav = [
  {
    id: 1,
    title: 'Навигация',
    list: ['О нас', 'Новости', 'Служба поддержки', 'Услуги'],
  },
  {
    id: 2,
    title: 'О нас',
    list: ['О сервисе', 'Наша команда', 'Вакансии', 'Инвесторы'],
  },
  {
    id: 3,
    title: 'Служба поддержки',
    list: ['Соглашения', 'Сообщества', 'Связь с нами'],
  },
];

function FooterNavigation() {
  return (
    <div className={styles['footer-navigation']}>
      {dataNav.map((item) => (
        <div className={styles['footer-navigation__item']} key={item.id}>
          <div className={styles['footer-navigation__item-title']}>
            {item.title}
          </div>
          {item.list.map((subitem, index) => (
            <div
              className={styles['footer-navigation__item-subtitle']}
              key={item.id + index}
            >
              {subitem}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default FooterNavigation;
