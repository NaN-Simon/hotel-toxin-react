import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import styles from './StartPage.module.scss';

const dataNavigation = [
  { id: 1, title: 'Color And Types', url: '/colorandtypes' },
  { id: 2, title: 'Form And Elements', url: '/formandelements' },
  { id: 3, title: 'Cards', url: '/cards' },
  { id: 4, title: 'Headers And Footers', url: '/headersandfooters' },
];

const StartPage = () => {
  return (
    <main className={styles['start-page__wrapper']}>
      <h1 className={styles['start-page__nav']}>Navigation</h1>
      <Navigation dataNavigation={dataNavigation} />
    </main>
  );
};

export default StartPage;
