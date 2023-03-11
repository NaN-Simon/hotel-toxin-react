import React, {useState, useCallback} from 'react';
import CheckboxList from '../../components/CheckboxList/CheckboxList';
import Dropdown from '../../components/Dropdown/Dropdown';
import Heading from '../../components/Heading/Heading';
import RadioButton from '../../components/RadioButton/RadioButton';
import TextField from '../../components/TextField/TextField';
import TextFieldMask from '../../components/TextFieldMask/TextFieldMask';
import DateDropdown from '../../components/DateDropdown/DateDropdown';
import styles from './FormAndElements.module.scss';

export default function FormAndElements() {
    const [dataCheckboxList, setDataCheckboxList] = useState([
      { id: 1, title: "Можно курить", name: 'smoke-allow', checked: false },
      { id: 2, title: "Можно с питомцами", name: 'pets-allow', checked: false },
      { id: 3, title: "Можно пригласить гостей (до 10 человек)", name: 'guests-allow', checked: true }
  ]);

    const onChange = useCallback((id: number, checked: boolean) => {
      setDataCheckboxList((old) => old.map((o) => (o.id === id ? { ...o, checked } : o)));
    }, []);

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
{/*             <div className={styles['form-elements__checkboxes']}>
              <div className={styles['form-elements__large-wrapper']}>
                <Heading type="h3" title="Checkbox Buttons" />
                <CheckboxList checkboxProps={dataCheckboxList} onChange={onChange}/>
              </div>
              <div className={styles['form-elements__large-wrapper']}>
                <RadioButton/>
              </div>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}
