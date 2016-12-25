import React from 'react';

import styles from './styles/index.css';

const CommandLineHistory = ({history}) => (
    <ul className={styles.historyWrapper}>
        {
            history.map((h, i) => (
                <li key={i} className={styles.historyItem}>{h}</li>
            ))
        }
    </ul>
);

export default CommandLineHistory;
