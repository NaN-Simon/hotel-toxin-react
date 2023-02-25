import React from 'react';
import styles from './StartPage.module.scss';
import Navigation from '../../components/navigation/Navigation';
export default function StartPage() {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.nav}>Navigation</h1>
      <Navigation />
    </main>
  );
}
