import React from 'react';
import classNames from 'classnames';
import styles from './Dignity.module.scss';

type IDignity = {
  id: number;
  title: string;
  description: string;
  materialIcon: string;
};
function Dignity({
  id, title, description, materialIcon,
}: IDignity) {
  const classesImg = classNames('material-icons', styles['dignity__image']);
  return (
    <div id={id.toString()} className={styles['dignity']}>
      <span className={classesImg}>{materialIcon}</span>
      <div className={styles['dignity__text']}>
        <div className={styles['dignity__text-title']}>{title}</div>
        <div className={styles['dignity__text-description']}>{description}</div>
      </div>
    </div>
  );
}

export default Dignity;
