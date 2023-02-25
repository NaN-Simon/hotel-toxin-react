import React from 'react';
import Heading from '../../components/heading/Heading';
import TextField from '../../components/text-field/TextField';
import styles from './FormAndElements.module.scss';

export default function FormAndElements() {
  return (
    <div className={styles['color-and-types']}>
      <header className={styles['form-elements__header']}>
        Form And Elements
      </header>
      <main className={styles['form-elements__main']}>
        <div className={styles['form-elements__container']}>
          <div className={styles['form-elements__text-fields-buttons']}>
            <div className={styles['form-elements__text-fields']}>
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="TEXT FIELD" description="DEFAULT" />
                <TextField type = 'text' placeholder="Email" name="email" />
              </div>
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="TEXT FIELD" description="HOVER/FOCUS" />
                <TextField type = 'text' placeholder="This is pretty awesome" name="email2" focused={true} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
