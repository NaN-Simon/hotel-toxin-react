import React from 'react';
import Dignity from '../Dignity/Dignity';
import styles from './DignityList.module.scss';

type IDignity = {
  id: number;
  title: string;
  description: string;
  materialIcon: string;
};

const dataDignity = [
  {
    id: 1,
    title: 'Комфорт',
    description: 'Шумопоглощающие стены',
    materialIcon: 'insert_emoticon',
  },
  {
    id: 2,
    title: 'Удобство',
    description: 'Окно в каждой из спален',
    materialIcon: 'location_city',
  },
];

function DignityList() {
  return (
    <div className={styles['dignity-list']}>
      {dataDignity.map((item: IDignity) => (
        <Dignity
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          materialIcon={item.materialIcon}
        />
      ))}
    </div>
  );
}

export default DignityList;
