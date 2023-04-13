import React from 'react';
import Button from '../../components/Button/Button';
import Heading from '../Heading/Heading';
import TextField from '../TextField/TextField';
import styles from './CardLogin.module.scss';

const CardLogin = () => {
  return (
    <form name="card-login1" className={styles['card-login']}>
      <div className={styles['card-login__heading']}>
        <Heading type="h2" title="ВОЙТИ" />
      </div>
      <div className={styles['card-login__email']}>
        <TextField placeholder="Email" name="email4" />
      </div>
      <div className={styles['card-login__password']}>
        <TextField placeholder="Пароль" name="password" />
      </div>
      <div className={styles['card-login__signin']}>
        <Button type="colored">ВОЙТИ</Button>
      </div>
      <div className={styles['card-login__login']}>
        <div className={styles['card-login__login-title']}>
          Нет аккаунта на Toxin?
        </div>
        <div className={styles['card-login__login-button']}>
          <Button type="tranparent">СОЗДАТЬ</Button>
        </div>
      </div>
    </form>
  );
};

export default CardLogin;
