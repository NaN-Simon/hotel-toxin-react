import React from 'react';
import classNames from 'classnames';
import BulletList from '../../components/BulletList/BulletList';
import Button from '../../components/Button/Button';
import CheckboxList from '../../components/CheckboxList/CheckboxList';
import DatePickerCustom from '../../components/DatePicker/DatePicker';
import DignityList from '../../components/DignityList/DignityList';
import Dropdown from '../../components/Dropdown/Dropdown';
import Heading from '../../components/Heading/Heading';
import TextField from '../../components/TextField/TextField';
import TextFieldMask from '../../components/TextFieldMask/TextFieldMask';
import ToggleButtonList from '../../components/ToggleButtonList/ToggleButtonList';
import LikeButton from '../../components/LikeButton/LikeButton';
import RadioButton from '../../components/RadioButton/RadioButton';
import RangeSlider from '../../components/RangeSlider/RangeSlider';
import Paginate from '../../components/Paginate/Paginate';
import RateButton from '../../components/RateButton/RateButton';
import Review from '../../components/Review/Review';
import styles from './FormAndElements.module.scss';

export default function FormAndElements() {
  const classesDropdown1 = classNames(
    styles['form-elements__large-wrapper'],
    styles['form-elements__large-wrapper--indexUp1'],
  );
  const classesDropdown2 = classNames(
    styles['form-elements__large-wrapper'],
    styles['form-elements__large-wrapper--indexUp2'],
  );
  const classesDropdown3 = classNames(
    styles['form-elements__large-wrapper'],
    styles['form-elements__large-wrapper--indexUp3'],
  );
  const classesDropdown4 = classNames(
    styles['form-elements__large-wrapper'],
    styles['form-elements__large-wrapper--indexUp4'],
  );

  return (
    <div className={styles['form-elements']}>
      <header className={styles['form-elements__header']}>
        Form And Elements
      </header>

      <main className={styles['form-elements__main']}>
        <div className={styles['form-elements__container']}>
          <div className={styles['form-elements__fields-buttons']}>
            <div
              className={styles['form-elements__fields-buttons-text-fields']}
            >
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
                <Heading type="h3" title="Date dropdown" />
                <div className={styles['form-elements__datepicker-container']}>
                  <DatePickerCustom name="datePicker1" mask="99.99.9999" />
                  <DatePickerCustom name="datePicker2" mask="99.99.9999" />
                </div>
              </div>
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="Filter date dropdown" />
                <DatePickerCustom
                  name="datePicker3"
                  mask="99.99.9999 - 99.99.9999"
                  selectsRange
                />
              </div>
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="SUBSCRIPTION TEXT FIELD" />
                <TextField placeholder="Email" name="email-sub" arrow />
              </div>
            </div>

            <div className={styles['form-elements__fields-buttons-checkboxes']}>
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="Checkbox Buttons" />
                <CheckboxList />
              </div>
              <div className={styles['form-elements__big-wrapper']}>
                <Heading type="h3" title="RADIO BUTTONS" />
                <RadioButton preset="gender" name="gender" inline />
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
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="rate button" />
                <div className={styles['form-elements__rate-button-container']}>
                  <RateButton id={1} maxrate={5} rate={4} />
                  <RateButton id={2} maxrate={5} rate={5} />
                </div>
              </div>
            </div>

            <div className={styles['form-elements__fields-buttons-buttons']}>
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="RANGE SLIDER" />
                <RangeSlider
                  min={0}
                  max={15000}
                  count={0}
                  range
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
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="PAGINATION" />
                <Paginate itemCounts={180} itemsPerPage={8} />
              </div>
            </div>
          </div>

          <div className={styles['form-elements__dropdowns']}>
            <div className={styles['form-elements__dropdowns-room']}>
              <div className={classesDropdown1}>
                <Heading type="h3" title="Dropdown" description="DEFAULT" />
                <Dropdown preset="room" hasBtn />
              </div>
              <div className={classesDropdown2}>
                <Heading type="h3" title="Dropdown" description="EXPANDED" />
                <Dropdown isOpened preset="room" hasBtn />
              </div>
            </div>
            <div className={styles['form-elements__dropdowns-guests-clear']}>
              <div className={classesDropdown3}>
                <div className={styles['form-elements__large-wrapper']}>
                  <Heading type="h3" title="Dropdown" />
                  <Dropdown isOpened preset="guests" hasBtn />
                </div>
              </div>
            </div>
            <div className={styles['form-elements__dropdowns-guests']}>
              <div className={classesDropdown4}>
                <div className={styles['form-elements__large-wrapper']}>
                  <Heading type="h3" title="Dropdown" />
                  <Dropdown preset="guests" hasBtn />
                </div>
              </div>
            </div>
          </div>

          <div className={styles['form-elements__lists']}>
            <div
              className={
                styles[
                  'form-elements__lists-expandable-checkbox-list-container'
                ]
              }
            >
              <div
                className={
                  styles['form-elements__lists-expandable-checkbox-list']
                }
              >
                <div className={styles['form-elements__large-wrapper']}>
                  <Heading type="h3" title="expandable checkbox list" />
                  <CheckboxList
                    preset="extraComfort"
                    dropWrapper
                    isOpened={false}
                  />
                </div>
                <div className={styles['form-elements__large-wrapper']}>
                  <Heading type="h3" title="expandable checkbox list" />
                  <CheckboxList preset="extraComfort" dropWrapper isOpened />
                </div>
              </div>
            </div>

            <div className={styles['form-elements__lists-rich-list']}>
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="RICH CHECKBOX BUTTONS" />
                <CheckboxList preset="neededs" />
              </div>
            </div>

            <div className={styles['form-elements__lists-bullet-list']}>
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="BULLET LIST" />
                <BulletList />
              </div>
            </div>
          </div>

          <div className={styles['form-elements__feedback']}>
            <div className={styles['form-elements__feedback-dignity']}>
              <div className={styles['form-elements__large-wrapper']}>
                <DignityList />
              </div>
            </div>
            <div className={styles['form-elements__feedback-review']}>
              <div className={styles['form-elements__huge-wrapper']}>
                <Review />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
