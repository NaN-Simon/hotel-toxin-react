import React from 'react';
import classes from './Types.module.scss';

interface ITypesProps {
  id: string;
  type: string;
  tag: string;
  description: string;
}

interface IType {
  typeProps: ITypesProps[];
}

const Types = (props: IType) => {
  return (
    <ul className={classes['type']}>
      {props.typeProps.map((colorElement: ITypesProps) => {
        const [tagClasses, descriptionClasses] = addTypeClass(colorElement);

        return (
          <li className={classes['type__item']} key={colorElement.id}>
            <div className={tagClasses.join(' ')}>{colorElement.tag}</div>
            <div className={descriptionClasses.join(' ')}>
              {colorElement.description}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

function addTypeClass(item: ITypesProps) {
  const tagClasses = [classes.type__tag];
  const descriptionClasses = [classes.type__description];

  switch (item.type) {
    case 'h1':
      tagClasses.push(classes.type__h1);
      descriptionClasses.push(classes.type__h1);
      break;
    case 'h2':
      tagClasses.push(classes.type__h2);
      descriptionClasses.push(classes.type__h2);
      break;
    case 'h3':
      tagClasses.push(classes.type__h3);
      descriptionClasses.push(classes.type__h3);
      break;
    default:
      tagClasses.push(classes.type__body);
      descriptionClasses.push(classes.type__body);
      break;
  }
  return [tagClasses, descriptionClasses];
}

export default Types;
