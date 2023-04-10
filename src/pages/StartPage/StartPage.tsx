import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import styles from './StartPage.module.scss';

const dataNavigation = [
  {id: 1, title: 'Color and Types', url: '/colorandtypes' },
  {id: 2, title: 'Form And Elements', url: '/formandelements' },
  {id: 3, title: 'Cards', url: '/cards' },
]

const StartPage = () => {
  return (
    <main className={styles['start-page__wrapper']}>
      <h1 className={styles['start-page__nav']}>Navigation</h1>
      <Navigation dataNav = {dataNavigation} />
    </main>
  );
};

export default StartPage;
