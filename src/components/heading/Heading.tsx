import React from 'react';
import styles from './Heading.module.scss';

interface IHeading {
    type: string;
    title: string;
    description?: string;
}
export default function Heading({type, title, description}: IHeading) {
  let titleClassList = ''
  switch (type){
    case 'h1':
      titleClassList = styles.heading__title_type_h1
      break;
    case 'h2':
      titleClassList = styles.heading__title_type_h2
      break;
    default:
      titleClassList = styles.heading__title_type_h3
      break;
  }
  const heading = React.createElement(
    type, {className: titleClassList}, title
  );

  return (
    <div className={styles.heading}>
      {heading}
      <span className = {styles['heading__description']}>{description}</span>
    </div>
  )
}
