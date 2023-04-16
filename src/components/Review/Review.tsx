import React from 'react';
import Avatar from '../Avatar/Avatar';
import LikeButton from '../LikeButton/LikeButton';
import styles from './Review.module.scss';

const dataReview = [
  {
    id: 1,
    alt: 'norman-reedus',
    imageSource: require('../../assets/img/user-avatar/img1.jpg'),
    name: 'Mr Smith',
    date: new Date(2023, 0, 1, 2, 3, 4, 567),
    likeCount: 12,
    likeName: 'like3',
    likeChecked: true,
    description: `Великолепный матрас на кровати в основной спальне!
    А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие.
    Выкрикивал комплименты повару — никто не жаловался из соседей.`,
  },
];

type IDataReview = {
  id: number;
  alt: string;
  imageSource: string;
  name: string;
  date: Date;
  likeCount: number;
  likeName: string;
  likeChecked: boolean;
  description: string;
};

const getDaysLater = (date: Date) => {
  const timeDiff = Math.abs(new Date().getTime() - date.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays;
};

const getPluralDay = (number: number, words: string[]) => {
  const value = Math.abs(number) % 100;
  const num = value % 10;
  if (value > 10 && value < 20) return `${value} ${words[2]}`;
  if (num > 1 && num < 5) return `${value} ${words[1]}`;
  if (num === 1) return `${value} ${words[0]}`;
  return `${number} ${words[2]}`;
};

function Review() {
  return (
    <>
      {dataReview.map((item: IDataReview) => (
        <div key={item.id} className={styles['review']}>
          <div className={styles['review__data']}>
            <div className={styles['review__data-photo']}>
              <Avatar alt={item.alt} imageSource={item.imageSource} />
            </div>
            <div className={styles['review__data-info']}>
              <div className={styles['review__data-info-name']}>
                {item.name}
              </div>
              <div className={styles['review__data-info-date']}>
                {`${getPluralDay(getDaysLater(item.date), [
                  'день',
                  'дня',
                  'дней',
                ])} назад`}
              </div>
            </div>
          </div>
          <div className={styles['review__feedback']}>
            <div className={styles['review__feedback-like']}>
              <LikeButton
                id={item.id}
                title={item.likeCount}
                name={item.likeName}
                checked={item.likeChecked}
              />
            </div>
            <div className={styles['review__feedback-description']}>
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Review;
