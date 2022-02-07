import React from 'react';
import styles from './Counter.module.scss';

const Controls = ({step, onIncrement, onDecrement}) => (
  <div className={styles.CounterControls}>
    <button type="button" onClick={onDecrement}>
      Уменьшить на {step}
    </button>
    <button type="button" onClick={onIncrement}>
      Увеличить на {step}
    </button>
  </div>
);

export default Controls;