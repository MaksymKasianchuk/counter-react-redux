import React from 'react';
import styles from './Counter.module.scss';

const Value = ({ value }) => <span className={styles.CounterValue}>{value}</span>;

export default Value;