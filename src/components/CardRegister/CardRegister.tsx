import React from 'react';
import Heading from '../Heading/Heading';
import TextField from '../TextField/TextField';
import RadioButton from '../RadioButton/RadioButton';
import TextFieldMask from '../TextFieldMask/TextFieldMask';
import Button from '../Button/Button';
import ToggleButton from '../ToggleButton/ToggleButton';
import styles from './CardRegister.module.scss';

function CardRegister() {
  return (
    <form name="card-register1" className={styles['card-register']}>
      <div className={styles['card-register__heading']}>
        <Heading type="h2" title="Регистрация аккаунта" />
      </div>
      <div className={styles['card-register__name']}>
        <TextField placeholder="Имя" name="name" />
      </div>
      <div className={styles['card-register__second-name']}>
        <TextField placeholder="Фамилия" name="second-name" />
      </div>
      <div className={styles['card-register__gender']}>
        <RadioButton preset="gender" name="gender" inline />
      </div>
      <div className={styles['card-register__birthday']}>
        <div className={styles['card-register__birthday-heading']}>
          <Heading type="h3" title="ДАТА РОЖДЕНИЯ" />
        </div>
        <div className={styles['card-register__birthday-text-field']}>
          <TextFieldMask
            mask="99-99-9999"
            placeholder="ДД.ММ.ГГГГ"
            name="date"
          />
        </div>
      </div>
      <div className={styles['card-register__signin']}>
        <div className={styles['card-register__signin-heading']}>
          <Heading type="h3" title="ДАННЫЕ ДЛЯ ВХОДА В СЕРВИС" />
        </div>
        <div className={styles['card-register__signin-mail']}>
          <TextField placeholder="Email" name="email2" />
        </div>
        <div className={styles['card-register__signin-password']}>
          <TextField placeholder="Пароль" name="password2" />
        </div>
      </div>
      <div className={styles['card-register__spec-offers']}>
        <ToggleButton
          id={3}
          title="Получать спецпредложения"
          name="special-offer3"
        />
      </div>
      <div className={styles['card-register__to-pay']}>
        <Button type="colored" arrow>
          перейти к оплате
        </Button>
      </div>
      <div className={styles['card-register__login']}>
        <div className={styles['card-register__login-title']}>
          Уже есть аккаунт на Toxin
        </div>
        <div className={styles['card-register__login-button']}>
          <Button type="tranparent">ВОЙТИ</Button>
        </div>
      </div>
    </form>
  );
}

export default CardRegister;
