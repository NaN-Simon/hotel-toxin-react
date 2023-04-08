import React from 'react';
import styles from './BulletList.module.scss';

const dataProhibited = [
  { id: 1, title: 'Нельзя с питомцами', name: 'pets' },
  { id: 2, title: 'Без вечеринок и мероприятий', name: 'party' },
  {
    id: 3,
    title: 'Время прибытия — после 13:00, а выезд до 12:00',
    name: 'time',
    checked: true,
  },
];

interface IBulletList {
  id: number;
  title: string;
  name: string;
  checked?: boolean;
}

const BulletList = () => {
  return (
    <ul className={styles['bullet-list']}>
      {dataProhibited.map((item: IBulletList) => {
        return (
          <li className={styles['bullet-list__title']} key={item.id}>
            {item.title}
          </li>
        );
      })}
    </ul>
  );
};

export default BulletList;
