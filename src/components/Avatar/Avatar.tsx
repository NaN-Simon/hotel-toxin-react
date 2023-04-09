import React from 'react';
import styles from './Avatar.module.scss';
type IAvatar = {
  alt: string;
  imageSource: string;
};

const Avatar = ({ alt, imageSource }: IAvatar) => {
  return <img alt={alt} className={styles['avatar__img']} src={imageSource} />;
};

export default Avatar;
