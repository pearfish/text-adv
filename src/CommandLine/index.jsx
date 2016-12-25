import React from 'react';

import CommandLineInput from './CommandLineInput';
import CommandLineHistory from './CommandLineHistory';
import styles from './styles/index.css';

class CommandLine extends React.Component {
    constructor(props) {
        super(props);

        const {defaultValue} = props;

        this.history = [];

        this.state = {
            value: defaultValue
        };
    }

    runCommand(command) {
        console.log('command invoked: ' + command);
        this.history.push(command);
    }

    render() {
        const {value} = this.state;

        return (
            <div className={styles.cmdWrapper}>
                <CommandLineHistory history={this.history} />
                <CommandLineInput value={value} onEnter={this.runCommand} />
            </div>
        );
    }
}

export default CommandLine;
