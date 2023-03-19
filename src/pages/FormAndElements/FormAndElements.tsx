import React from 'react';
import styles from './FormAndElements.module.scss';
import CheckboxList from '../../components/CheckboxList/CheckboxList';
import Dropdown from '../../components/Dropdown/Dropdown';
import Heading from '../../components/Heading/Heading';
import RadioButton from '../../components/RadioButton/RadioButton';
import TextField from '../../components/TextField/TextField';
import TextFieldMask from '../../components/TextFieldMask/TextFieldMask';
import DateDropdown from '../../components/DateDropdown/DateDropdown';
import ToggleButtonList from '../../components/ToggleButtonList/ToggleButtonList';
import LikeButton from '../../components/LikeButton/LikeButton';
import RangeSlider from '../../components/RangeSlider/RangeSlider';
import Button from '../../components/Button/Button';
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
                <Heading
                  type="h3"
                  title="TEXT FIELD"
                  description="HOVER/FOCUS"
                />
                <TextField
                  placeholder="This is pretty awesome"
                  name="email2"
                  focused
                />
              </div>
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="MASKED TEXT FIELD" />
                <TextFieldMask
                  mask="99-99-9999"
                  placeholder="ДД.ММ.ГГГГ"
                  name="date"
                />
              </div>
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="Dropdown" />
                <Dropdown />
              </div>
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="Filter date dropdown" />
                <DateDropdown />
              </div>
            </div>

            <div className={styles['form-elements__checkboxes']}>
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="Checkbox Buttons" />
                <CheckboxList />
              </div>
              <div className={styles['form-elements__big-wrapper']}>
                <Heading type="h3" title="RADIO BUTTONS" />
                <RadioButton />
              </div>
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="Toggle" />
                <ToggleButtonList />
              </div>
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="Like button" />
                <div className={styles['form-elements__like-button-container']}>
                  <LikeButton id={1} title={2} name="like" />
                  <LikeButton id={2} title={12} name="like" checked />
                </div>
              </div>
            </div>

            <div className={styles['form-elements__buttons']}>
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="RANGE SLIDER" />
                <RangeSlider
                  min={0}
                  max={15000}
                  count={0}
                  range={true}
                  step={100}
                  startValue={[5000, 10000]}
                />
              </div>
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="Buttons" />
                <div className={styles['form-elements__btn-container-type1']}>
                  <Button type="colored">click me</Button>
                  <Button type="colored" disable>
                    click me
                  </Button>
                </div>
                <div className={styles['form-elements__btn-container-type2']}>
                  <Button type="tranparent">click me</Button>
                  <Button type="tranparent" disable>
                    click me
                  </Button>
                </div>
                <div className={styles['form-elements__btn-container-type1']}>
                  <Button type="link">click me</Button>
                  <Button type="link" disable>
                    click me
                  </Button>
                </div>
                <div className={styles['form-elements__btn-container-type3']}>
                  <Button type="colored" arrow>
                    перейти к оплате
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
