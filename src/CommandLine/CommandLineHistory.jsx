import React from 'react';

import styles from './styles';

export const CommandLineHistory = ({history}) => (
    <ul className={styles.historyWrapper}>
        {
            history.map(h => (
                <li className={styles.historyItem}>{h}</li>
            ));
        }
    </ul>
);
