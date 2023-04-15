import React from 'react';
import Button from '../Button/Button';
import styles from './CardLoginMini.module.scss';
import classNames from 'classnames';

type ICardLoginMini = {
  type: string;
  userName?: string;
  isVertical?: boolean;
};
const CardLoginMini = ({ type, userName, isVertical }: ICardLoginMini) => {
  const classesProfile = classNames(
    styles['header__profile'],
    isVertical && styles['header__profile--vertical']
  );
  return (
    <div>
      {type === 'guest' && (
        <div className={classesProfile}>
          <div className={styles['header__profile-login']}>
            <Button type="tranparent">войти</Button>
          </div>
          <div className={styles['header__profile-register']}>
            <Button type="colored" arrow>
              зарегистрироваться
            </Button>
          </div>
        </div>
      )}
      {userName && (
        <div className={styles['header__profile']}>
          <div className={styles['header__profile-space']}></div>
          <div className={styles['header__profile-username']}>{userName}</div>
        </div>
      )}
    </div>
  );
};

export default CardLoginMini;
