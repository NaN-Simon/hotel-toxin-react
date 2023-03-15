import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './RangeSlider.module.scss';

interface IRangeSlider {
  min: number;
  max: number;
  count?: number;
  step?: number;
  startValue: number | number[];
  range?: boolean;
  vertical?: boolean;
}
const RangeSlider = ({
  min,
  max,
  count,
  step,
  startValue,
  range,
  vertical,
}: IRangeSlider) => {
  const [value, setValue] = useState(startValue);
  const [inputValue, setInputValue] = useState(value);
  return (
    <div className={styles['range-slider']}>
      <div className={styles['range-slider__scoreboard']}>
        {Array.isArray(inputValue)
          ? inputValue.join('₽ - ') + '₽'
          : inputValue + '₽'}
      </div>

      <Slider
        min={min}
        max={max}
        value={value}
        step={step || 1}
        count={count || 0}
        allowCross={false}
        range={range || false}
        vertical={vertical || false}
        onChange={(nextValues) => {
          setValue(nextValues as number[]);
          setInputValue(nextValues as number[]);
        }}
      />
    </div>
  );
};

export default RangeSlider;
