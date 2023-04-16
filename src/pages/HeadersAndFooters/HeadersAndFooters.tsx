import React from 'react';
import Header from '../../components/Header/Header';
import styles from './HeadersAndFooters.module.scss';
import Footer from '../../components/Footer/Footer';

function HeadersAndFooters() {
  return (
    <div>
      <header className={styles['headers-and-footers__page-title']}>
        Headers And Footers
      </header>
      <main className={styles['headers-and-footers__main']}>
        <div className={styles['headers-and-footers__container']}>
          <div className={styles['headers-and-footers__header']}>
            <Header type="guest" />
          </div>
          <div className={styles['headers-and-footers__header']}>
            <Header type="user" userName="Mr Smith" />
          </div>
          <div className={styles['headers-and-footers__footer']}>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}

export default HeadersAndFooters;
