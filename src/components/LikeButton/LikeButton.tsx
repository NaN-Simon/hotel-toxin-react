import React, {useState, useCallback} from 'react';
import classNames from 'classnames';
import styles from './LikeButton.module.scss';

interface ILikeButton{
  id: number,
  title: number, 
  name: string, 
  checked?: boolean
}

const LikeButton = ({id, title, name, checked}: ILikeButton) => {
  const [isChecked, setIsChecked] = useState(checked || false)
  const [numberTitle, setNumberTitle] = useState(title)
  
  const classesLikeButtonInput = classNames('material-icons', styles['like-button__input'])
  const classesLikeButtonlabel = classNames(styles['like-button__title'], isChecked && styles['like-button__title-blue'])

  const onChange = () => {
    setIsChecked((isChecked) => !isChecked)
    setNumberTitle(
      (numberTitle: number) => isChecked 
        ? numberTitle - 1  
        : numberTitle + 1)
  }

  return (
    <div className={styles['like-button__item']}>
      <input 
        className={classesLikeButtonInput} 
        type="checkbox" 
        id={id.toString()}
        name={name}
        checked={isChecked}
        onChange={onChange}
      />
      <label className={classesLikeButtonlabel}>{numberTitle}</label>
    </div>
  )
}

export default LikeButton