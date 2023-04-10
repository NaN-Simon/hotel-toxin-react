import React from 'react';
// import Colors from '../../components/Colors/Colors';
// import Types from '../../components/Types/Types';
import styles from './ColorAndTypes.module.scss';

const dataColors = [
  {
    id: 0,
    color: '#1f2041',
    title: 'Dark Shade 100%',
    hexName: '#1F2041',
  },
  {
    id: 1,
    color: '#1f2041bf',
    title: 'Dark Shade 75%',
    hexName: '#1F2041',
  },
  {
    id: 2,
    color: '#1f204180',
    title: 'Dark Shade 50%',
    hexName: '#1F2041',
  },
  {
    id: 3,
    color: '#1f204140',
    title: 'Dark Shade 25%',
    hexName: '#1F2041',
  },
  {
    id: 4,
    color: '#1f20410d',
    title: 'Dark Shade 5%',
    hexName: '#1F2041',
  },
  {
    id: 5,
    color: '#bc9cff',
    title: 'Purple',
    hexName: '#BC9CFF',
  },
  {
    id: 6,
    color: '#6fcf97',
    title: 'Green',
    hexName: '#6FCF97',
  },
];
const dataTypes = [
  {
    id: '1',
    type: 'h1',
    tag: 'H1',
    description: 'This one is the sub-section or widget title',
  },
  {
    id: '2',
    type: 'h2',
    tag: 'H2',
    description: 'Next one is the item title inside widgets',
  },
  {
    id: '3',
    type: 'h3',
    tag: 'H3',
    description: 'This is a label or CTA text',
  },
  {
    id: '4',
    type: 'body',
    tag: 'body',
    description:
      'This is the body text which is used for most\n of the design, like paragraphs, lists, etc.',
  },
];

const ColorAndTypes = () => {
  return (
    <div className={styles['color-and-types']}>
      <header className={styles['color-and-types__header']}>
        Color And Types
      </header>
      <main className={styles['color-and-types__main']}>
        <div className={styles['color-and-types__container']}>
          {/* <Colors colorProps={dataColors} />
          <Types typeProps={dataTypes} /> */}
        </div>
      </main>
    </div>
  );
};

export default ColorAndTypes;
