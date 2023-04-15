import React, { useState } from 'react';
import CardLoginMini from '../CardLoginMini/CardLoginMini';
import classNames from 'classnames';
import styles from './BurgerMenu.module.scss';
import Navigation from '../Navigation/Navigation';

type INavigation = {
  id: number;
  title: string;
  url: string;
  current?: boolean;
  droplist?: Idroplist[];
};

type Idroplist = {
  id: number;
  subtitle: string;
  suburl: string;
};

type INavigationArray = {
  dataNavigation: INavigation[];
  type: string;
  userName?: string;
};

const BurgerMenu = ({ dataNavigation, type, userName }: INavigationArray) => {
  const [openMenu, setOpenMenu] = useState(false);
  const classesMenuToggle = classNames(
    styles['menu-toggle'],
    openMenu && styles['burger__open']
  );
  const classesMenuNav = classNames(
    styles['burger__nav'],
    openMenu && styles['burger__nav--open']
  );
  console.log(dataNavigation);

  return (
    <div className={styles['burger__container']}>
      <div
        className={classesMenuToggle}
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        <div className={styles['burger']}>
          <span className={styles['burger-line']}></span>
          <span className={styles['burger-line']}></span>
          <span className={styles['burger-line']}></span>
        </div>
        <div className={styles['burger__cross']}>
          <span className={styles['burger__cross-line']}></span>
          <span className={styles['burger__cross-line']}></span>
        </div>
      </div>
      <div className={classesMenuNav}>
        <Navigation dataNavigation={dataNavigation} />
        <CardLoginMini type={type} userName={userName} isVertical />
      </div>
    </div>
  );
};

export default BurgerMenu;
