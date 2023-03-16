import React from 'react';
import styles from './Heading.module.scss';

interface IHeading {
  type: string;
  title: string;
  description?: string;
}
export default function Heading({ type, title, description }: IHeading) {
  const heading = React.createElement(
    type,
    { className: styles[`heading__title-type-${type}`] },
    title
  );

  return (
    <div className={styles.heading}>
      {heading}
      <span className={styles['heading__description']}>{description}</span>
    </div>
  );
}
