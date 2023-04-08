import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';
const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link className={styles['navigation__item']} to="/colorandtypes">
        Color and Types
      </Link>
      <Link className={styles['navigation__item']} to="/formandelements">
        Form And Elements
      </Link>
    </nav>
  );
};

export default Navigation;
