import React from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import CardLoginMini from '../CardLoginMini/CardLoginMini';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.scss';

const dataHeaderNavigation = [
  {
    id: 1, title: 'О нас', url: '#', current: true,
  },
  {
    id: 2,
    title: 'Услуги',
    url: '#',
    droplist: [
      { id: 21, subtitle: 'Уборка комнаты', suburl: '#' },
      { id: 22, subtitle: 'Застилка постелей', suburl: '#' },
      { id: 23, subtitle: 'Химчистка', suburl: '#' },
      { id: 24, subtitle: 'Автопаровка', suburl: '#' },
    ],
  },
  { id: 3, title: 'Вакансии', url: '#' },
  {
    id: 4,
    title: 'Новости',
    url: '#',
    droplist: [
      { id: 41, subtitle: 'Местные', suburl: '#' },
      { id: 42, subtitle: 'Государственные', suburl: '#' },
      { id: 43, subtitle: 'Мировые', suburl: '#' },
    ],
  },
  { id: 5, title: 'Соглашения', url: '#' },
];

type IHeader = {
  type: string;
  userName?: string;
};

function Header({ type, userName }: IHeader) {
  return (
    <div className={styles['header']}>
      <div className={styles['header__logo']} />
      <div className={styles['header__menu']}>
        <Navigation dataNavigation={dataHeaderNavigation} isHorizontal />
        <CardLoginMini type={type} userName={userName} />
      </div>
      <div className={styles['header__burger']}>
        <BurgerMenu
          dataNavigation={dataHeaderNavigation}
          type={type}
          userName={userName}
        />
      </div>
    </div>
  );
}

export default Header;

Header.defaultProps = {
  userName: null,
};
