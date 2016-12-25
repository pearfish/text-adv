import React from 'react';

import styles from './styles/index.css';

const CommandLineInput = ({value, onChange}) => (
    <input
        className={styles.inputBar}
        value={value}
        onChange={onChange}
    />
);

export default CommandLineInput;
