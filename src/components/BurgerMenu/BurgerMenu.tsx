import React, { useState } from 'react';
import classNames from 'classnames';
import CardLoginMini from '../CardLoginMini/CardLoginMini';
import styles from './BurgerMenu.module.scss';
import Navigation from '../Navigation/Navigation';

type Idroplist = {
  id: number;
  subtitle: string;
  suburl: string;
};

type INavigation = {
  id: number;
  title: string;
  url: string;
  current?: boolean;
  droplist?: Idroplist[];
};

type INavigationArray = {
  dataNavigation: INavigation[];
  type: string;
  userName?: string;
};

function BurgerMenu({ dataNavigation, type, userName }: INavigationArray) {
  const [openMenu, setOpenMenu] = useState(false);
  const classesMenuToggle = classNames(
    styles['menu-toggle'],
    openMenu && styles['burger__open'],
  );
  const classesMenuNav = classNames(
    styles['burger__nav'],
    openMenu && styles['burger__nav--open'],
  );

  return (
    <div className={styles['burger__container']}>
      <div
        className={classesMenuToggle}
        role="presentation" //todo
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
        onKeyDown={() => {
          setOpenMenu(!openMenu);
        }} //todo
      >
        <div className={styles['burger']}>
          <span className={styles['burger-line']} />
          <span className={styles['burger-line']} />
          <span className={styles['burger-line']} />
        </div>
        <div className={styles['burger__cross']}>
          <span className={styles['burger__cross-line']} />
          <span className={styles['burger__cross-line']} />
        </div>
      </div>
      <div className={classesMenuNav}>
        <Navigation dataNavigation={dataNavigation} />
        <CardLoginMini type={type} userName={userName} isVertical />
      </div>
    </div>
  );
}

export default BurgerMenu;

BurgerMenu.defaultProps = {
  userName: null,
};
