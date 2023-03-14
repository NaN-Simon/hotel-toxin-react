import React, {useState, useCallback} from 'react';
import CheckboxList from '../../components/CheckboxList/CheckboxList';
import Dropdown from '../../components/Dropdown/Dropdown';
import Heading from '../../components/Heading/Heading';
import RadioButton from '../../components/RadioButton/RadioButton';
import TextField from '../../components/TextField/TextField';
import TextFieldMask from '../../components/TextFieldMask/TextFieldMask';
import DateDropdown from '../../components/DateDropdown/DateDropdown';
import ToggleButtonList from '../../components/ToggleButtonList/ToggleButtonList';
import styles from './FormAndElements.module.scss';
import LikeButton from '../../components/LikeButton/LikeButton';

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
                <TextField placeholder="Email" name="email" />
              </div>
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="TEXT FIELD" description="HOVER/FOCUS" />
                <TextField placeholder="This is pretty awesome" name="email2" focused={true} />
              </div>
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="MASKED TEXT FIELD" />
                <TextFieldMask mask="99-99-9999" placeholder="ДД.ММ.ГГГГ" name="date"/>
              </div>
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="Dropdown"/>
                <Dropdown/>
              </div>
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="Date dropdown"/>
                <DateDropdown/>
              </div>
            </div>
            <div className={styles['form-elements__checkboxes']}>
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="Checkbox Buttons" />
                <CheckboxList/>
              </div>
              <div className={styles['form-elements__big-wrapper']}>
                <Heading type="h3" title="RADIO BUTTONS" />
                <RadioButton/>
              </div>
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="Toggle" />
                <ToggleButtonList/>
              </div>
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="Like button" />
                <div className={styles['form-elements__like-button-container']}>
                  <LikeButton id={1} title={2} name='like'/>
                  <LikeButton id={1} title={12} name='like' checked={true}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
