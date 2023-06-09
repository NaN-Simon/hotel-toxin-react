import React from 'react';
import classNames from 'classnames';
import Button from '../Button/Button';
import styles from './CardLoginMini.module.scss';

type ICardLoginMini = {
  type: string;
  userName?: string;
  isVertical?: boolean;
};
function CardLoginMini({ type, userName, isVertical }: ICardLoginMini) {
  const classesProfile = classNames(
    styles['header__profile'],
    isVertical && styles['header__profile--vertical'],
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
          <div className={styles['header__profile-space']} />
          <div className={styles['header__profile-username']}>{userName}</div>
        </div>
      )}
    </div>
  );
}

export default CardLoginMini;

CardLoginMini.defaultProps = {
  userName: null,
  isVertical: null,
};
