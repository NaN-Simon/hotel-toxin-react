import React from 'react';
import Button from '../Button/Button';
import Navigation from '../../components/Navigation/Navigation';
import styles from './Header.module.scss';

const dataHeaderNavigation = [
  { id: 1, title: 'О нас', url: '#', current: true },
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

function renderRightSection(type: string, userName?: string) {
  if (type === 'guest') {
    return (
      <div className={styles['header__profile']}>
        <div className={styles['header__profile-login']}>
          <Button type="tranparent">войти</Button>
        </div>
        <div className={styles['header__profile-register']}>
          <Button type="colored" arrow>
            зарегистрироваться
          </Button>
        </div>
      </div>
    );
  } else if (userName) {
    return (
      <div className={styles['header__profile']}>
        <div className={styles['header__profile-space']}></div>
        <div className={styles['header__profile-username']}>{userName}</div>
      </div>
    );
  }
}

const Header = ({ type, userName }: IHeader) => {
  return (
    <div className={styles['header']}>
      <div className={styles['header__logo']}></div>
      <div className={styles['header__menu']}>
        <Navigation dataNavigation={dataHeaderNavigation} isHorizontal />
        {renderRightSection(type, userName)}
      </div>
    </div>
  );
};

export default Header;
