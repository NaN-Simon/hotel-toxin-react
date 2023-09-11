import React from 'react';
import classNames from 'classnames';
import styles from './Checkbox.module.scss';

interface ICheckbox {
  id: number;
  title: string;
  description?: string;
  name: string;
  checked: boolean;
  onChange: (id: number, checked: boolean) => void;
}

function Checkbox({
  id,
  title,
  description,
  name,
  checked,
  onChange,
}: ICheckbox) {
  const classesTextTitle = classNames(
    styles['checkbox__text-title'],
    description && styles['checkbox__text-title--rich'],
  );
  return (
    <label className={styles['checkbox__label']}>
      <input
        className={styles['checkbox__reset-icon']}
        id={id.toString()}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={(e) => onChange(id, e.currentTarget.checked)}
        value="face"
      />

      <span
        className={classNames('material-icons', styles['checkbox__box'])}
      />
      <div className={styles['checkbox__text']}>
        <span className={classesTextTitle}>{title}</span>
        {description && (
          <span className={styles['checkbox__text-description']}>
            {description}
          </span>
        )}
      </div>
    </label>
  );
}

export default Checkbox;

Checkbox.defaultProps = {
  description: null,
};
