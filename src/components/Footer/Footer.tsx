import React from 'react';
import FooterNavigation from '../FooterNavigation/FooterNavigation';
import Heading from '../Heading/Heading';
import TextField from '../TextField/TextField';
import Twitter from '../../assets/icons/Twitter';
import Instagram from '../../assets/icons/Instagram';
import Facebook from '../../assets/icons/Facebook';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles['footer']}>
      <div className={styles['footer__container']}>
        <div className={styles['footer__widgets']}>
          <div className={styles['footer__widgets-booking']}>
            <span className={styles['footer__widgets-booking-logo']} />
            <span className={styles['footer__widgets-booking-discribe']}>
              Бронирование номеров в лучшем отеле 2019 года по версии ассоциации
              «Отельные взгляды»
            </span>
          </div>
          <FooterNavigation />
          <div className={styles['footer__widgets-subscribe']}>
            <Heading type="h3" title="подписка" />
            <span className={styles['footer__widgets-subscribe-title']}>
              Получайте специальные предложения и новости сервиса
            </span>
            <TextField placeholder="Email" name="email4" />
          </div>
        </div>
        <div className={styles['footer__copyright-and-social']}>
          <div className={styles['footer__copyright-and-social-copyright']}>
            Copyright © 2018 Toxin отель. Все права защищены.
          </div>
          <div className={styles['footer__copyright-and-social-social']}>
            <Twitter />
            <Instagram />
            <Facebook />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
