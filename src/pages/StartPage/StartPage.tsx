import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import styles from './StartPage.module.scss';

const StartPage = () => {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.nav}>Navigation</h1>
      <Navigation />
    </main>
  );
};

export default StartPage;
