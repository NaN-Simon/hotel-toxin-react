import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Navigation.module.scss';

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
  isHorizontal?: boolean;
};

function renderSubItems(item: INavigation) {
  return item.droplist?.map((subitem) => {
    return (
      <div key={subitem.id} className={styles['navigation__subitem']}>
        {subitem.subtitle}
      </div>
    );
  });
}

const Navigation = ({ dataNavigation, isHorizontal }: INavigationArray) => {
  const classesNavigation = classNames(
    styles['navigation'],
    isHorizontal && classNames(styles['navigation--horizontal'])
  );

  return (
    <ul className={classesNavigation}>
      {dataNavigation.map((item) => {
        const [opened, setOpened] = useState(false);
        const classesItem = classNames(
          styles['navigation__item'],
          item.current && styles['navigation__item--current']
        );
        const classesItemIco = classNames(item.droplist && 'material-icons');
        const classesItemContainer = classNames(
          styles['navigation__item-container']
        );
        const classesSubItems = classNames(
          styles['navigation__subitems'],
          opened && styles['navigation__subitems--open']
        );

        return (
          <li
            className={classesItemContainer}
            key={item.id}
            onMouseLeave={() => setOpened(false)}
          >
            <Link
              className={classesItem}
              to={item.url}
              onClick={() => setOpened(!opened)}
            >
              <span>{item.title}</span>
              {item.droplist && (
                <div className={classesItemIco}>
                  {opened ? 'expand_more' : 'expand_less'}
                </div>
              )}
            </Link>
            <div className={classesSubItems}>{renderSubItems(item)}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
