import React from 'react'
import DatePickerCustom from '../../components/DatePicker/DatePicker';
import Dropdown from '../../components/Dropdown/Dropdown';
import Button from '../../components/Button/Button';
import Heading from '../Heading/Heading';
import styles from './CardSearch.module.scss';

const CardSearch = () => {
  return (
    <form name='card-search1' className={styles['card-room-search']}>
      <div className={styles['card-room-search__heading']}>
        <Heading type="h2" title="Найдём номера под ваши пожелания" />
      </div>
      <div className={styles['card-room-search__date-dropdown']}>
        <DatePickerCustom name="datePicker3" mask="99.99.9999" />
        <DatePickerCustom name="datePicker4" mask="99.99.9999" />
      </div>
      <div className={styles['card-room-search__dropdown']}>
        <Dropdown preset="guests" hasBtn />
      </div>
      <div className={styles['card-room-search__button']}>
        <Button type="colored" arrow>подобрать номер</Button>
      </div>
    </form>
  )
}

export default CardSearch;