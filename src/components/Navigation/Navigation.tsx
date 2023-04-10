import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

type INavigation = {
  id: number, 
  title: string, 
  url: string,
}

type INavigationArray = {
  dataNav: INavigation[]
}

const Navigation = ({dataNav}: INavigationArray) => {
  return (
    <nav className={styles.navigation}>
      {dataNav.map(item => {
        return (
      <Link key={item.id} className={styles['navigation__item']} to={item.url}>
        {item.title}
      </Link>
        )
      })}
    </nav>
  );
};

export default Navigation;
